import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.welcome.title}>WELCOM!</Text>
        <Text style={styles.welcome.text}>
          Congratulations on your new todo acount! Stay organize and never
          forgot a task with this efficient tool.
        </Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Auth")}
          style={styles.buttons.button}
        >
          <Text>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("SingIn")}
          style={styles.buttons.button}
        >
          <Text>Sing in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    marginTop: 50,
    width: "100%",
    justifyContent: "space-evenly",
    button: {
      backgroundColor: "rgba(24, 181, 164, 1)",
      paddingTop: 20,
      paddingBottom: 20,
      width: 130,
      borderRadius: 20,
      alignItems: "center",
    },
  },
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#48416c",
    position: "relative",
    alignItems: "center",
  },
  welcome: {
    width: "90%",
    marginTop: 200,
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "rgba(24, 181, 164, 1)",
    borderRadius: 20,
    alignItems: "center",
    title: {
      fontSize: 28,
      color: "#48416c",
    },
    text: {
      marginTop: 5,
      fontSize: 18,
      color: "#48416c",
      textAlign: "center",
    },
  },
});
