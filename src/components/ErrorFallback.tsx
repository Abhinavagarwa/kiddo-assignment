import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export function ErrorFallback({
  error,
}: {
  error: Error;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Something went wrong
      </Text>

      <Text>
        {error.message}
      </Text>
    </View>
  );
}

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    title: {
      fontSize: 20,
      fontWeight: "700",
      marginBottom: 12,
    },
  });