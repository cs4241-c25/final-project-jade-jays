import { MarkerType } from "reactflow";

function BasicEdge(
  id: string,
  source: string,
  target: string,
  sourceHandle: string,
  color: string,
): any {
  return {
    id: id,
    source: source,
    target: target,
    type: "step",
    color: color,
    sourceHandle: sourceHandle,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: color,
    },
    style: { stroke: color },
    focusable: false,
  };
}

export function PrereqEdge(
  id: string,
  source: string,
  target: string,
  sourceHandle: string,
): any {
  return BasicEdge(id, source, target, sourceHandle, "red");
}

export function ConcurrentEdge(
  id: string,
  source: string,
  target: string,
  sourceHandle: string,
): any {
  return BasicEdge(id, source, target, sourceHandle, "green");
}
