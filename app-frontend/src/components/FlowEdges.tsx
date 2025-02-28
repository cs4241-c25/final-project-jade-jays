import { MarkerType } from "reactflow";

function basicEdge(
  id: string,
  source: string,
  target: string,
  targetHandle: string,
  req: string,
): any {

  let color = "";
  if (req === "prereq") {
    color = "black"
  }
  else if (req === "concurrent") {
    color = "blue"
  }
  else if (req === "recomended") {
    color = "green"
  }

  return {
    id: id,
    source: source,
    target: target,
    type: "step",
    color: color,
    targetHandle: targetHandle,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: color,
    },
    style: { stroke: color },
    focusable: false,
  };
}

export function prereqEdge(
  id: string,
  source: string,
  target: string,
  targetHandle: string,
): any {
  return basicEdge(id, source, target, targetHandle, "red");
}

export function concurrentEdge(
  id: string,
  source: string,
  target: string,
  targetHandle: string,
): any {
  return basicEdge(id, source, target, targetHandle, "green");
}

export function getEdges(nodes: any[]): any[] {

  let edges: any[] = [];

  let edgeID = 0;

  for (let nodeI = 0; nodeI < nodes.length; nodeI++) {
    const node = nodes[nodeI];
    const nodeID = node.id;
    for (let reqI = 0; reqI < node.prereq.length; reqI++) {
      const prereqs = node.prereq[reqI];
      for (let reqJ = 0; reqJ < prereqs.length; reqJ++) {
        const sourceClass = prereqs[reqJ];
        const sourceID = sourceClass.id;
        edges.push(
            basicEdge(String(edgeID), sourceID, nodeID, String(reqI), sourceClass.req)
        );
        edgeID++;
      }
    }
  }

  return edges;
}