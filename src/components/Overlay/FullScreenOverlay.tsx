import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export function FullScreenOverlay() {
  return (
    <View
      pointerEvents="none"
      style={StyleSheet.absoluteFill}
    >
      <LottieView
        source={require("../../assets/confetti.json")}
        autoPlay
        loop
        style={styles.overlay}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
  },
});