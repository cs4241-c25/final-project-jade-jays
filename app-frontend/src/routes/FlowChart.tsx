import React, {useCallback, useState} from "react";
import {ReactFlow, MiniMap, Controls, getConnectedEdges, useEdgesState, applyEdgeChanges} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import {ClassNode, getClasses} from "@/components/FlowNode.tsx";
import { getEdges } from "@/components/FlowEdges.tsx";
import { Legend } from "@/components/Legend.tsx";

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

const objApp = {
  name: "Application Building With Object-Oriented Concept",
  id: "CS 2119",
  professor: "Shubbhi Taneja",
  time: "T-F 11:00AM-12:50PM",
  taken: "confirmed",
  prereq: [],
};

const os = {
  name: "Operating Systems",
  id: "CS 3013",
  professor: "Craig Wills",
  time: "T-F 12:00PM-1:50PM",
  taken: "confirmed",
  prereq: [],
}

const webware = {
  name: "Webware: Computational Technology For Network Information Systems",
  id: "CS 4241",
  professor: "Joshua Cuneo",
  time: "T-F 3:00PM-4:50 PM",
  taken: "confirmed",
  prereq: [
    [
      { id: "CS 2102", req: "prereq" },
      { id: "CS 2103", req: "prereq" },
      { id: "CS 2119", req: "prereq" },
    ],
    [{ id: "CS 3013", req: "prereq" }],
  ],
}

const nodes = [obj, advObj, discrete, algo, webware, os, objApp];



export const FlowChart = () => {
  /*const initialNodes = [
    { id: algo.id, position: { x: 400, y: 200 }, data: algo, type: "custom" },
    {
      id: discrete.id,
      position: { x: 600, y: 0 },
      data: discrete,
      type: "custom",
    },
    { id: obj.id, position: { x: 300, y: 0 }, data: obj, type: "custom" },
    { id: advObj.id, position: { x: 0, y: 0 }, data: advObj, type: "custom" },
    { id: webware.id, position: { x: 100, y: 700 }, data: webware, type: "custom" },
    { id: os.id, position: { x: 300, y: 500 }, data: os, type: "custom" },
    { id: objApp.id, position: { x: 0, y: 500 }, data: objApp, type: "custom" },
  ];*/

  const initialEdges = getEdges(nodes);
  const initialNodes = getClasses(nodes, initialEdges);
  const [edges, setEdges] = useEdgesState(initialEdges);

  const nodeTypes = {
    custom: ClassNode,
  };

  const onNodeClick = (event, node) => {
    let newEdges = edges.slice(0);
    for (let newEdge of newEdges) {
      newEdge.animated = false;
    }
    const connectedEdges = getConnectedEdges([node], newEdges);

    for (let i = 0; i < connectedEdges.length; i++) {
      const index = edges.indexOf(connectedEdges[i]);
      newEdges[index].animated = true;
    }

    setEdges(newEdges);
  }

  return (
    <div style={{ width: "100vw", height: "calc(100vh - 37px)" }}>
      <Legend />
      <ReactFlow
        onNodeClick={onNodeClick}
        nodes={initialNodes}
        edges={edges}
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
