import React, { memo } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { FlashList } from "@shopify/flash-list";

import ProductCard from "../ProductCard/ProductCard";

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
}

interface Props {
  node: {
    title: string;
    products: Product[];
  };
}

function DynamicCollection({
  node,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {node.title}
      </Text>

      <FlashList<Product>
        horizontal
        data={node.products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard product={item} />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 8,
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
    marginTop: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
    marginLeft: 12,
  },
});