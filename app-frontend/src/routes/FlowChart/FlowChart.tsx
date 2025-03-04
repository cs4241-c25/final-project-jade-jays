import { useCallback, useEffect, useState } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  getConnectedEdges,
  applyEdgeChanges,
  applyNodeChanges,
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
        returnArray[index] = splitted[i].substring(0, codeStart) + " " + splitted[i].substring(codeStart);
        index++;
      }
    }
    console.log("Retrieved", returnArray);
    return returnArray;
  } else {
    return [];
  }
}

async function retrieveClass(subject: string, code: string) {
  return await getCourseObject(subject, code);
}

const classTitles = localToArray();

const classNodes = [];
for (let i = 0; i < classTitles.length; i++) {
  const params = classTitles[i].split(" ");
  const data = await retrieveClass(params[0], params[1]);
  if (data !== undefined) {
    classNodes.push(data);
  }
}

const getLayoutedElements = (nodes, edges, options) => {
  const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: options.direction });

  edges.forEach((edge) => g.setEdge(edge.source, edge.target));
  nodes.forEach((node) =>
    g.setNode(node.id, {
      ...node,
      width: rs.getPropertyValue("--node-width").replace("px", "") * 2,
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
  const [edges, setEdges] = useState(getEdges(classNodes));
  const [nodes, setNodes] = useState(getClasses(classNodes, edges));
  //const initialNodes = getClasses(classNodes, getEdges(classNodes));

  const nodeTypes = {
    custom: ClassNode,
  };

  const onNodeClick = (event, node) => {
    console.log(node);
    let newEdges = edges.slice(0);
    for (let newEdge of newEdges) {
      newEdge.animated = false;
    }
    const connectedEdges = getConnectedEdges([node], newEdges);
    console.log(connectedEdges);

    for (let i = 0; i < connectedEdges.length; i++) {
      const index = edges.indexOf(connectedEdges[i]);
      newEdges[index].animated = true;
    }

    console.log(edges);
    setEdges(newEdges);
    console.log(edges);
  };

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  const onLayout = useCallback(
    (direction) => {
      const layouted = getLayoutedElements(nodes, edges, { direction });

      setNodes([...layouted.nodes]);
      setEdges([...layouted.edges]);
    },
    [nodes, edges],
  );

  useEffect(() => {
    const onPageLoad = () => {
      onLayout("TB");
    };
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <div style={{ width: "100vw - 0px", height: "calc(100vh - 90px)" }}>
      <Legend />
      <ReactFlow
        edges={edges}
        nodes={nodes}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
        fitView={false}
        proOptions={{ hideAttribution: true }}
        //onNodeClick={onNodeClick}
      >
        <MiniMap nodeStrokeWidth={30} />
        <Controls />
      </ReactFlow>
    </div>
  );
};
