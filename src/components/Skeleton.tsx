import React from "react";

import {
  View,
} from "react-native";

export function Skeleton() {

  return (
    <View
      style={{
        height: 150,
        borderRadius: 12,
        backgroundColor:
          "#E0E0E0",
        marginVertical: 8,
      }}
    />
  );
}