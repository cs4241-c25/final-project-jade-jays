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

/*const obj: classes = {
  title: "Object Oriented Design",
  subject: "CS",
  code: "2102",
  taken: "uncompleted",
  prereq: [],
};

const advObj: classes = {
  title: "Accelerated Object Oriented Design Concepts",
  subject: "CS",
  code: "2103",
  taken: "unconfirmed",
  prereq: [],
};

const discrete: classes = {
  title: "Discrete Mathematics",
  subject: "CS",
  code: "2022",
  taken: "completed",
  prereq: [],
};

const algo: classes = {
  title: "Algorithms",
  subject: "CS",
  code: "2223",
  taken: "confirmed",
  prereq: [
    [
      { id: "CS 2102", req: "prereq" },
      { id: "CS 2103", req: "concurrent" },
    ],
    [{ id: "CS 2022", req: "recomended" }],
  ],
};

const objApp: classes = {
  title: "Application Building With Object-Oriented Concept",
  subject: "CS",
  code: "2119",
  taken: "confirmed",
  prereq: [],
};

const os: classes = {
  title: "Operating Systems",
  subject: "CS",
  code: "3013",
  taken: "confirmed",
  prereq: [],
};

const webware: classes = {
  title: "Webware: Computational Technology For Network Information Systems",
  subject: "CS",
  code: "4241",
  taken: "confirmed",
  prereq: [
    [
      { id: "CS 2102", req: "prereq" },
      { id: "CS 2103", req: "prereq" },
      { id: "CS 2119", req: "prereq" },
    ],
    [{ id: "CS 3013", req: "prereq" }],
  ],
};

const foundations: classes = {
  title: "Foundations Of Computer Science",
  subject: "CS",
  code: "3133",
  taken: "confirmed",
  prereq: [
    [{ id: "CS 2022", req: "prereq" }],
    [{ id: "CS 2223", req: "prereq" }],
  ],
};

const introAI: classes = {
  title: "Introduction To Artificial Intelligence",
  subject: "CS",
  code: "4341",
  taken: "confirmed",
  prereq: [
    [
      { id: "CS 2102", req: "prereq" },
      { id: "CS 2103", req: "prereq" },
    ],
    [{ id: "CS 2223", req: "prereq" }],
    [{ id: "CS 3133", req: "prereq" }],
  ],
};

/*const classNodes: classes[] = [
  obj,
  advObj,
  discrete,
  algo,
  webware,
  os,
  objApp,
  foundations,
  introAI,
  //localStorage.getItem("added_course_list")
];*/

async function retrieveClass(subject: string, code: string) {
  return await getCourseObject(subject, code);
}

const classTitles = [
  "CS 2102",
  "CS 2119",
  "CS 3013",
  "CS 2103",
  "CS 2022",
  "CS 4241",
  "CS 2223",
  "CS 3133",
  "CS 4341",
  "CS 4342",
    "MA 1021",
    "MA 1022",
    "MA 1023",
    "MA 1024",
];
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
