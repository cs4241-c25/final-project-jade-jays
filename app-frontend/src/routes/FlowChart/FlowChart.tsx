import { useCallback, useEffect, useState } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  getConnectedEdges,
  applyEdgeChanges,
  applyNodeChanges,
  Panel,
} from "@xyflow/react";
import Dagre from "@dagrejs/dagre";

import "@xyflow/react/dist/style.css";
import "@/routes/FlowChart/FlowNode.css";

const r = document.querySelector(":root");
const rs = getComputedStyle(r);

import { ClassNode, getClasses } from "@/routes/FlowChart/FlowNodes.tsx";
import { getEdges } from "@/routes/FlowChart/FlowEdges.tsx";
import { Legend } from "@/routes/FlowChart/Legend.tsx";
import { getCourseObject } from "@/hooks/data-fetches.ts";

if (!localStorage.getItem("selectedCourses")) {
  localStorage.setItem("selectedCourses", "");
}

export function localToArray() {
  const stored = localStorage.getItem("selectedCourses");
  if (stored) {
    const splitted = stored.split(";");
    const returnArray = [];
    let index = 0;
    for (let i = 0; i < splitted.length; i++) {
      if (splitted[i] !== "undefined") {
        const codeStart = splitted[i].search(/\d/);
        returnArray[index] =
          splitted[i].substring(0, codeStart) +
          " " +
          splitted[i].substring(codeStart);
        index++;
      }
    }
    return returnArray;
  } else {
    return [];
  }
}

async function retrieveClass(subject: string, code: string) {
  return await getCourseObject(subject, code);
}

async function getClassNodes() {
  const classTitles = localToArray();
  const classNodes = [];
  for (let i = 0; i < classTitles.length; i++) {
    const params = classTitles[i].split(" ");
    const data = await retrieveClass(params[0], params[1]);
    if (data !== undefined) {
      classNodes.push(data);
    }
  }
  return classNodes;
}

const getLayoutedElements = (nodes, edges, options) => {
  const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: options.direction });

  edges.forEach((edge) => g.setEdge(edge.source, edge.target));
  nodes.forEach((node) =>
    g.setNode(node.id, {
      ...node,
      width: rs.getPropertyValue("--node-width").replace("px", "") * 1.2,
      height: rs.getPropertyValue("--node-height").replace("px", "") * 2,
    }),
  );

  Dagre.layout(g);

  return {
    nodes: nodes.map((node) => {
      const position = g.node(node.id);
      // We are shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      const x = position.x - (node.measured?.width ?? 0) / 2;
      const y = position.y - (node.measured?.height ?? 0) / 2;

      return { ...node, position: { x, y } };
    }),
    edges,
  };
};

export const FlowChart = () => {
  const [edges, setEdges] = useState(getEdges([]));
  const [nodes, setNodes] = useState(getClasses([], edges));
  const [fullReq, setFullReq] = useState<boolean>(false);

  //const { fitView } = useReactFlow();
  //const reactFlow = useReactFlow();
  //reactFlow.fitView();

  const nodeTypes = {
    custom: ClassNode,
  };

  const onNodeClick = (event, node) => {
    setEdges((edges) =>
      edges.map((edg) => {
        const connectedEdges = getConnectedEdges([node], edges);
        if (connectedEdges.indexOf(edg) === -1) {
          return { ...edg, animated: false };
        }
        return { ...edg, animated: true };
      }),
    );
  };

  const onNodesChange = useCallback(
    (changes) =>
      setNodes((nds) => {
        return applyNodeChanges(changes, nds);
      }),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) =>
      setEdges((eds) => {
        return applyEdgeChanges(changes, eds);
      }),
    [],
  );

  const onLayout = useCallback(
    (direction, newNodes, newEdges) => {
      const layouted = getLayoutedElements(newNodes, newEdges, { direction });
      setNodes([...layouted.nodes]);
      setEdges([...layouted.edges]);
    },
    [nodes, edges],
  );

  let initNodes = [];
  let finishLoading = false;
  let addedNodes = [];
  let countNodes = 0;

  function inNodeList(node) {
    const nodeID = node.subject + " " + node.code;
    for (let i = 0; i < addedNodes.length; i++) {
      const existID = addedNodes[i].subject + " " + addedNodes[i].code;
      if (existID === nodeID) {
        return true;
      }
    }
    return false;
  }

  async function recursiveGet(node) {
    //const params = [];
    const data = await retrieveClass(node.subject, node.code);
    const addedClasses = [];
    for (let i = 0; i < data.prereq.length; i++) {
      for (let j = 0; j < data.prereq[i].length; j++) {
        const prereqParams = data.prereq[i][j].id.split(" ");
        const prereqNode = await retrieveClass(
          prereqParams[0],
          prereqParams[1],
        );
        if (prereqNode) {
          prereqNode.taken = "uncompleted";
          if (!inNodeList(prereqNode)) {
            addedClasses.push(prereqNode);
            addedNodes.push(prereqNode);
          }
        }
      }
    }

    for (let i = 0; i < addedClasses.length; i++) {
      await recursiveGet(addedClasses[i]);
    }
  }

  const onPageLoad = (getFullTree: boolean) => {
    getClassNodes().then((nodes) => {
      addedNodes = [];
      countNodes = 0;
      finishLoading = false;
      initNodes = [];
      if (getFullTree) {
        for (let i = 0; i < nodes.length; i++) {
          nodes[i].taken = "completed";
          addedNodes.push(nodes[i]);
        }
        for (let i = 0; i < nodes.length; i++) {
          recursiveGet(nodes[i]).then(() => {
            countNodes++;
            if (countNodes >= nodes.length) {
              initNodes = addedNodes;
              finishLoading = true;
            }
          });
        }
      } else {
        initNodes = nodes;
        finishLoading = true;
      }
    });
    loadData();
  };

  function loadData() {
    if (!finishLoading) {
      setTimeout(loadData, 10);
    } else {
      onLayout(
        "TB",
        getClasses(initNodes, getEdges(initNodes)),
        getEdges(initNodes),
      );
    }
  }

  useEffect(() => {
    if (document.readyState === "complete") {
      onPageLoad(fullReq);
    } else {
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
      <div style={{width: "100vw - 0px", height: "calc(100vh - 90px)"}}>
        <ReactFlow
            edges={edges}
            nodes={nodes}
            onEdgesChange={onEdgesChange}
            onNodesChange={onNodesChange}
            nodeTypes={nodeTypes}
            fitView={false}
            proOptions={{hideAttribution: true}}
            onNodeClick={onNodeClick}
        >
          <Panel position="top-left">
            <Legend/>
          </Panel>
          <Panel position="top-right">
            <div className={"legend"}>
              <label htmlFor="fullDepth">
                <input
                    id="fullDepth"
                    type="checkbox"
                    checked={fullReq}
                    onChange={(event) => {
                      setFullReq(event.target.checked);
                      onPageLoad(event.target.checked);
                    }}
                    className="prereq"
                    aria-label={"Full Prerequisites"}
                />
                Full Prereqs
              </label>
            </div>
          </Panel>
          <MiniMap nodeStrokeWidth={30}/>
          <Controls/>
        </ReactFlow>
      </div>
  );
};
