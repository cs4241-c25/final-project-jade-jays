import React from "react";
import { ReactFlow, MiniMap, Controls } from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import ClassNode from "@/components/FlowNode.tsx";
import {
  getEdges,
} from "@/components/FlowEdges.tsx";
import {Legend} from "@/components/Legend.tsx";

const obj = {
  name: "Object Oriented Design",
  id: "CS 2102",
  professor: "Mathew Ahrens",
  time: "M-T-R-F 12:00PM-12:50PM",
  taken: "uncompleted",
  prereq: [],
};

const advObj = {
  name: "Accelerated Object Oriented Design Concepts",
  id: "CS 2103",
  professor: "Joshua Cuneo",
  time: "M-T-R-F 12:00PM-12:50PM",
  taken: "unconfirmed",
  prereq: [],
};

const discrete = {
  name: "Discrete Mathematics",
  id: "CS 2022",
  professor: "Herman Servatius",
  time: "M-T-R-F 4:00PM-4:50PM",
  taken: "completed",
  prereq: [],
};

const algo = {
  name: "Algorithms",
  id: "CS 2223",
  professor: "Michael Engling",
  time: "M-T-R-F 10:00AM-11:50AM",
  taken: "confirmed",
  prereq: [
    [
      { id: "CS 2102", req: "prereq" },
      { id: "CS 2103", req: "concurrent" },
    ],
    [{ id: "CS 2022", req: "recomended" }],
  ],
};

const nodes = [obj, advObj, discrete, algo];

export const FlowChart: React.FC = () => {
  const initialNodes = [
    { id: algo.id, position: { x: 400, y: 200 }, data: algo, type: "custom" },
    {
      id: discrete.id,
      position: { x: 600, y: 0 },
      data: discrete,
      type: "custom",
    },
    { id: obj.id, position: { x: 300, y: 0 }, data: obj, type: "custom" },
    { id: advObj.id, position: { x: 0, y: 0 }, data: advObj, type: "custom" },
  ];

  const initialEdges = getEdges(nodes);

  const nodeTypes = {
    custom: ClassNode,
  };

  return (
    <div style={{ width: "100vw", height: "calc(100vh - 37px)" }}>
      <Legend />
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        fitView
        proOptions={{ hideAttribution: true }}
      >
        <MiniMap nodeStrokeWidth={30} />
        <Controls />
      </ReactFlow>

    </div>
  );
};
