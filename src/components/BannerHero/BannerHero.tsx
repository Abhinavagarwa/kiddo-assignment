import React, { memo } from "react";
import {
  Pressable,
  StyleSheet,
} from "react-native";

import { Image } from "expo-image";

import { handleAction } from "../../actions/handleAction";

interface Props {
  node: any;
}

function BannerHero({
  node,
}: Props) {
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        handleAction(node.action)
      }
    >
      <Image
        source={node.imageUrl}
        contentFit="cover"
        style={styles.image}
      />
    </Pressable>
  );
}

export default memo(BannerHero);

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 16,
  },

  image: {
    width: "100%",
    height: 180,
    borderRadius: 16,
  },
});