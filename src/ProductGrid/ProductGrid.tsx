import React, { memo } from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import ProductCard from "../ProductCard/ProductCard";

function ProductGrid({
  node,
}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {node.title || "Featured Products"}
      </Text>

      <View style={styles.grid}>
        {node.products.map(
          (product: any) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          )
        )}
      </View>
    </View>
  );
}

export default memo(ProductGrid);

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});