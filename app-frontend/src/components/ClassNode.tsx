import { Handle, Position } from "@xyflow/react";
import "@/styles/FlowNode.css";
import React, {JSX} from "react";

const width = 100;

function getHandles(count: number): any {
  const spacing:number = 15;
  let startIndex:number = (width/2) - (1 - (count % 2)) * (spacing / 2) - Math.floor(count / 2) * spacing;

  let handles: JSX.Element[] = [];
  for (let i:number = 0; i < count; i++) {
    handles.push(<Handle
        type="source"
        id={String(i)}
        position={Position.Bottom}
        isConnectable={true}
        style={{ left: startIndex + i * spacing}}
    />);
  }

  return (
      <> {handles} </>
  );
}

export default function ClassNode({ data, isConnectable }) {
  console.log(data);

  return (
    /*<>
      <div className={'flow-node uncompleted'} >
        <div>{data.label}</div>
        <Handle
          type="source"
          id="first"
          position={Position.Bottom}
          isConnectable={isConnectable}
          //style={{ transform: "translate(0px, 0px)" }}
          style={{ left: 10 }}
        />
        <Handle
          type="source"
          id="second"
          position={Position.Bottom}
          isConnectable={isConnectable}
        />
        <Handle
          type="source"
          id="third"
          position={Position.Bottom}
          isConnectable={isConnectable}
          style={{ right: 15 }}
        />
      </div>
    </>*/
      <>
        <div className={'flow-node uncompleted'} >
          <div>{data.label}</div>
          {getHandles(data.count)}
        </div>
      </>
  );
}
