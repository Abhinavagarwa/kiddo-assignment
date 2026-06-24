import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { useCartStore }
from "../../store/cartStore";

import { useTheme }
from "../../providers/ThemeProvider";

export function CartHeader() {
  const theme = useTheme();

  const insets =
    useSafeAreaInsets();

  const count = useCartStore(
    (state) => state.count
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

          shadowColor: "#000",

          shadowOpacity: 0.1,

          shadowRadius: 8,

          shadowOffset: {
            width: 0,
            height: 4,
          },

          elevation: 4,
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,

    paddingBottom: 16,

    flexDirection: "row",

    justifyContent:
      "space-between",

    alignItems: "center",

    borderBottomLeftRadius: 20,

    borderBottomRightRadius: 20,
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

    fontSize: 13,
  },

  cartBadge: {
    backgroundColor:
      "rgba(255,255,255,0.2)",

    paddingHorizontal: 14,

    paddingVertical: 8,

    borderRadius: 20,
  },

  cartText: {
    color: "#fff",

    fontWeight: "700",

    fontSize: 16,
  },
});