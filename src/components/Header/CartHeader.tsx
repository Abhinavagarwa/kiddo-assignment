import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { useTheme }
from "../../providers/ThemeProvider";

import { useCartStore }
from "../../store/cartStore";

export function CartHeader() {

  const theme = useTheme();

  const insets =
    useSafeAreaInsets();

  const count =
    useCartStore(
      (state) => state.count
    );

  const total =
    useCartStore(
      (state) => state.total
    );

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop:
            insets.top + 12,

          backgroundColor:
            theme.primary,
        },
      ]}
    >

      <View>
        <Text style={styles.brand}>
          Kiddo 🧸
        </Text>

        <Text style={styles.subtitle}>
          Kids & Baby Essentials
        </Text>
      </View>

      <View style={styles.cartBadge}>
        <Text style={styles.cartText}>
          🛒 {count}
        </Text>

        <Text style={styles.total}>
          ₹{total}
        </Text>
      </View>

    </View>
  );
}

const styles =
  StyleSheet.create({
    container: {
      paddingHorizontal: 20,

      paddingBottom: 18,

      flexDirection: "row",

      justifyContent:
        "space-between",

      alignItems: "center",

      borderBottomLeftRadius: 24,

      borderBottomRightRadius: 24,

      elevation: 6,
    },

    brand: {
      color: "#fff",

      fontSize: 24,

      fontWeight: "700",
    },

    subtitle: {
      color:
        "rgba(255,255,255,0.9)",

      marginTop: 4,
    },

    cartBadge: {
      backgroundColor:
        "rgba(255,255,255,0.2)",

      paddingHorizontal: 14,

      paddingVertical: 10,

      borderRadius: 20,

      alignItems: "center",
    },

    cartText: {
      color: "#fff",

      fontWeight: "700",

      fontSize: 16,
    },

    total: {
      color: "#fff",

      fontWeight: "700",

      marginTop: 4,
    },
  });