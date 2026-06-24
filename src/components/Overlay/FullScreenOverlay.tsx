import React from "react";

import LottieView
from "lottie-react-native";

import {
  StyleSheet,
} from "react-native";

interface Props {
  source: any;
}

export function FullScreenOverlay({
  source,
}: Props) {

  return (
    <LottieView
      source={source}
      autoPlay
      loop
      pointerEvents="none"
      style={styles.overlay}
    />
  );
}

const styles =
  StyleSheet.create({
    overlay: {
      ...StyleSheet.absoluteFillObject,
      zIndex: 999,
    },
  });