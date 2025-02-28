import React from 'react'
import { ReactFlow, MiniMap, Controls } from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { MarkerType } from 'reactflow';

import ClassNode from "../components/ClassNode";

export const FlowChart: React.FC = () => {
  const initialNodes = [
    { id: "1", position: { x: 0, y: 0 }, data: { labels: 3 }, type: "custom" },
    { id: "node-2", position: { x: 100, y: 100 }, data: { label: "2" } },
    { id: "3", position: { x: 200, y: 200 }, data: { label: "3" } },
    { id: "4", position: { x: 300, y: 300 }, data: { label: "4" } },
    { id: "5", position: { x: 400, y: 400 }, data: { label: "5" } },
  ];
  const initialEdges = [
      { id: "e1-2", source: "1", target: "node-2", type: "step", color: "red", sourceHandle: "red", markerEnd: {
          type: MarkerType.ArrowClosed
        }},
      { id: "e1-3", source: "1", target: "3", type: "step", color: "red", sourceHandle: "blue", markerEnd: {
              type: MarkerType.ArrowClosed
          } }
  ];

  const nodeTypes = {
    custom: ClassNode,
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} nodeTypes={nodeTypes} fitView >
        <MiniMap nodeStrokeWidth={30} />
        <Controls />
      </ReactFlow>
    </div>
  );
};
