import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import {
  HomepageSchema,
} from "./src/utils/validatePayload";
import { SafeAreaProvider } from "react-native-safe-area-context";
import payload from "./src/data/homepage.json";

import { ThemeProvider } from "./src/providers/ThemeProvider";
import { CampaignProvider } from "./src/providers/CampaignProvider";
import { CampaignRegistry } from "./src/campaigns/campaignRegistry";

import { CartHeader } from "./src/components/Header/CartHeader";
import { HomeRenderer } from "./src/renderer/HomeRenderer";

export default function App() {
  const validation =
    HomepageSchema.safeParse(
      payload
    );

  if (!validation.success) {

    console.error(
      validation.error
    );

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>
          Invalid Server Payload
        </Text>
      </View>
    );
  }
  const activeCampaign =
    CampaignRegistry.BACK_TO_SCHOOL;

  console.log(
    "Sections loaded:",
    payload.sections.length
  );

  return (
     <SafeAreaProvider>
    <CampaignProvider value={activeCampaign}>
      <ThemeProvider value={activeCampaign.theme}>
        <SafeAreaView style={styles.container}>
          <CartHeader />

          <View style={styles.content}>
            <HomeRenderer
              sections={payload.sections}
            />
          </View>
        </SafeAreaView>
      </ThemeProvider>
    </CampaignProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },

  content: {
    flex: 1,
  },
});