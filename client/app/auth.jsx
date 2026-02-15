import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { router } from "expo-router";

import { COLORS } from "../colors";

export default function Auth() {
  return (
    <View style={styles.main}>
      {/* Auth kortet */}
      <View style={styles.authCard}>
        <View style={styles.section}>
          {/* Header */}
          <Text style={styles.h1}>Logga in</Text>

          {/* Inputs */}
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Lösenord" />

          {/* Glömt lösen */}
          <Pressable style={styles.forgotPassword}>
            <Text style={styles.p}>Glömt lösenord?</Text>
          </Pressable>
        </View>

        <View style={styles.section}>
          {/* Auth knapp */}
          <Pressable style={styles.authButton}>
            <Text>Logga in</Text>
          </Pressable>

          {/* Inget konto / Har redan konto */}
          <Pressable style={styles.changeAuthType}>
            <Text style={styles.p}>
              Har du inget konto? Registrera dig här.
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  section: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  h1: {
    fontSize: 26,
    fontWeight: "700",
    color: COLORS.text,
    padding: 8,
  },

  p: {
    fontSize: 12,
    fontWeight: "400",
    color: COLORS.text,
  },

  authCard: {
    width: "80%",
    height: "40%",
    padding: 16,
    backgroundColor: COLORS.lines,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,

    elevation: 6,
  },

  input: {
    width: "100%",
    padding: 12,
    backgroundColor: COLORS.background,
    color: COLORS.text,
    borderRadius: 4,
  },

  forgotPassword: {
    alignSelf: "flex-start",
  },

  authButton: {
    width: "100%",
    padding: 12,
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  changeAuthType: {
    alignSelf: "center",
  },
});
