import React from "react";
import { FlashList } from "@shopify/flash-list";

import { RenderNode } from "./RenderNode";

interface Props {
  sections: any[];
}

export function HomeRenderer({
  sections,
}: Props) {
  return (
    <FlashList<any>
      data={sections}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <RenderNode node={item} />
      )}
      contentContainerStyle={{
        paddingHorizontal: 8,
        paddingBottom: 100,
      }}
    />
  );
}