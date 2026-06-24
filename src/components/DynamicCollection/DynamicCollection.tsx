import React, { memo } from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { FlashList } from "@shopify/flash-list";

import ProductCard from "../ProductCard/ProductCard";

function DynamicCollection({
  node,
}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {node.title}
      </Text>

      <FlashList
        horizontal
        data={node.products}
        estimatedItemSize={220}
        keyExtractor={(item) =>
          item.id
        }
        renderItem={({ item }) => (
          <ProductCard
            product={item}
          />
        )}
        showsHorizontalScrollIndicator={false}
        style={{
          height: 320,
        }}
        contentContainerStyle={{
          paddingRight: 20,
        }}
      />
    </View>
  );
}

export default memo(
  DynamicCollection
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
    marginLeft: 4,
  },
});