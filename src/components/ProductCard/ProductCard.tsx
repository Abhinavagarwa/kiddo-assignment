import React, { memo } from "react";

import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";

import { Image } from "expo-image";

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

  const addItem = useCartStore(
    (state) => state.addItem
  );

  const removeItem = useCartStore(
    (state) => state.removeItem
  );

  return (
    <View style={styles.card}>

      <Image
        source={product.image}
        style={styles.image}
        contentFit="cover"
      />

      <Text style={styles.title}>
        {product.title}
      </Text>

      <Text style={styles.price}>
        ₹{product.price}
      </Text>

      <View style={styles.actions}>

        <Pressable
          style={styles.removeBtn}
          onPress={() =>
            removeItem(
              product.id,
              product.price
            )
          }
        >
          <Text style={styles.actionText}>
            −
          </Text>
        </Pressable>

        <Text style={styles.qty}>
          {qty}
        </Text>

        <Pressable
          style={[
            styles.addBtn,
            {
              backgroundColor:
                theme.primary,
            },
          ]}
          onPress={() =>
            addItem(
              product.id,
              product.price
            )
          }
        >
          <Text
            style={styles.addText}
          >
            +
          </Text>
        </Pressable>

      </View>

    </View>
  );
}

export default memo(ProductCard);

const styles =
  StyleSheet.create({
    card: {
      width: 145,

      marginHorizontal: 8,

      marginVertical: 10,

      padding: 12,

      borderRadius: 16,

      backgroundColor: "#fff",

      shadowColor: "#000",

      shadowOpacity: 0.08,

      shadowRadius: 8,

      shadowOffset: {
        width: 0,
        height: 4,
      },

      elevation: 4,
    },

    image: {
      width: "100%",

      height: 120,

      borderRadius: 12,
    },

    title: {
      marginTop: 10,

      fontSize: 15,

      fontWeight: "600",
    },

    price: {
      marginTop: 6,

      fontSize: 18,

      fontWeight: "700",
    },

    actions: {
      flexDirection: "row",

      justifyContent: "center",

      alignItems: "center",

      marginTop: 14,
    },

    removeBtn: {
      width: 36,

      height: 36,

      borderRadius: 18,

      backgroundColor: "#E5E5E5",

      justifyContent: "center",

      alignItems: "center",
    },

    addBtn: {
      width: 36,

      height: 36,

      borderRadius: 18,

      justifyContent: "center",

      alignItems: "center",
    },

    actionText: {
      fontSize: 22,

      fontWeight: "700",
    },

    addText: {
      color: "#fff",

      fontSize: 22,

      fontWeight: "700",
    },

    qty: {
      marginHorizontal: 16,

      fontSize: 18,

      fontWeight: "700",
    },
  });