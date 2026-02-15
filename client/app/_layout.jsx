import { Stack } from "expo-router";
import { View } from "react-native";

import { COLORS } from "../colors";

export default function Layout() {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: COLORS.background },
        }}
      />
    </View>
  );
}
