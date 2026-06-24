import React, { memo } from "react";

import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";

import { Image }
from "expo-image";

import { useTheme }
from "../../providers/ThemeProvider";

import { useCartStore }
from "../../store/cartStore";

interface Props {
  product: {
    id: string;
    title: string;
    image: string;
    price: number;
  };
}

function ProductCard({
  product,
}: Props) {
  const theme = useTheme();

  const qty = useCartStore(
    (state) =>
      state.items[product.id] ?? 0
  );

  const addItem =
    useCartStore(
      (state) => state.addItem
    );

  const removeItem =
    useCartStore(
      (state) =>
        state.removeItem
    );

  return (
    <View style={styles.card}>
      <Image
        source={product.image}
        style={styles.image}
      />

      <Text style={styles.title}>
        {product.title}
      </Text>

      <Text style={styles.price}>
        ₹{product.price}
      </Text>

      <View style={styles.actionRow}>
        <Pressable
          style={[
            styles.smallButton,
            {
              backgroundColor:
                "#ff5252",
            },
          ]}
          onPress={() =>
            removeItem(
              product.id
            )
          }
        >
          <Text
            style={
              styles.buttonText
            }
          >
            −
          </Text>
        </Pressable>

        <Text style={styles.qty}>
          {qty}
        </Text>

        <Pressable
          style={[
            styles.smallButton,
            {
              backgroundColor:
                theme.primary,
            },
          ]}
          onPress={() =>
            addItem(
              product.id
            )
          }
        >
          <Text
            style={
              styles.buttonText
            }
          >
            +
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default memo(
  ProductCard
);

const styles = StyleSheet.create({
  card: {
    width: 160,

    backgroundColor: "#fff",

    borderRadius: 16,

    padding: 12,

    marginBottom: 16,

    shadowColor: "#000",

    shadowOpacity: 0.08,

    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 3,
  },

  image: {
    width: "100%",

    height: 140,

    borderRadius: 12,
  },

  title: {
    marginTop: 10,

    fontSize: 16,

    fontWeight: "600",
  },

  price: {
    marginTop: 6,

    fontSize: 18,

    fontWeight: "700",
  },

  actionRow: {
    marginTop: 12,

    flexDirection: "row",

    justifyContent: "center",

    alignItems: "center",
  },

  smallButton: {
    width: 40,

    height: 40,

    borderRadius: 20,

    justifyContent: "center",

    alignItems: "center",
  },

  qty: {
    marginHorizontal: 16,

    fontSize: 18,

    fontWeight: "700",
  },

  buttonText: {
    color: "#fff",

    fontSize: 18,

    fontWeight: "700",
  },
});