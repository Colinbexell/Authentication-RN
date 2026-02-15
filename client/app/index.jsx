import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

import { COLORS } from "../colors";

export default function Index() {
  return (
    <View>
      <Text style={{ fontSize: 26, fontWeight: "700" }}>Home</Text>

      <Pressable onPress={() => router.replace("/auth")}>
        <Text>Gå till Auth</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
