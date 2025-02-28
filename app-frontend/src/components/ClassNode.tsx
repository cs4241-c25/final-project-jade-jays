import { Handle, Position } from "@xyflow/react";
import "@/styles/FlowNode.css";
import React, { JSX } from "react";

const width = 210;

function getHandles(count: number): any {
  const spacing: number = 40;
  let startIndex: number =
    width/2 +
    (1 - (count % 2)) * (spacing / 2) -
    Math.floor(count / 2) * spacing;

  let handles: JSX.Element[] = [];
  for (let i: number = 0; i < count; i++) {
    handles.push(
      <Handle
          key={i}
        type="target"
        id={String(i)}
        position={Position.Top}
        isConnectable={true}
        style={{ left: startIndex + i * spacing }}
      />
    );
  }

  return <> {handles} </>;
}

export default function ClassNode({ data, isConnectable }) {

  const handlers = getHandles(data.prereq.length);

  const label = data.name + "\n" + data.id + "\n" + data.professor + "\n" + data.time;

  return (
    <>
      <div className={"flow-node " + data.taken} >
        <p style={{width: "100%"}}>{data.name}</p>
        <p style={{width: "100%"}}>{data.id}</p>
        <p style={{width: "100%"}}>{data.professor}</p>
        <p style={{width: "100%"}}>{data.time}</p>
        {handlers}
        <Handle
            type="source"
            id={"-1"}
            position={Position.Bottom}
            isConnectable={true}
        />
      </div>
    </>
  );
}
