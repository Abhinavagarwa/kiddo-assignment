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
    <FlashList
      data={sections}
      estimatedItemSize={250}
      keyExtractor={(item) =>
        item.id
      }
      renderItem={({ item }) => (
        <RenderNode node={item} />
      )}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 24,
      }}
    />
  );
}