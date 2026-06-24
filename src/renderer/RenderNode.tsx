import React from "react";
import { ComponentRegistry } from "./ComponentRegistry";

interface Props {
  node: any;
}

export function RenderNode({
  node,
}: Props) {
  const Component =
    ComponentRegistry[
      node.type as keyof typeof ComponentRegistry
    ];

  if (!Component) {
    console.warn(
      `Unsupported component: ${node.type}`
    );

    return null;
  }
  console.log(
  "Rendering:",
  node.type
);
  return (
    <Component node={node} />
  );
}