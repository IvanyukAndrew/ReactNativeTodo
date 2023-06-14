import { FlatList, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Footer = () => {
  const instUri = require("../assets/instagram.png");
  const gmailUri = require("../assets/gmail.png");
  const gitUri = require("../assets/git.png");

  const openGmail = () => {
    Linking.openURL("mailto:ivanyuk.andrei@gmail.com");
  };

  const openGit = () => {
    Linking.openURL("https://github.com/IvanyukAndrew");
  };

  const openInstagram = () => {
    Linking.openURL("https://www.instagram.com/ivanyuk_ard/");
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={openGmail} style={styles.block}>
        <Image style={styles.image} source={gmailUri} />
      </TouchableOpacity>

      <TouchableOpacity onPress={openInstagram} style={styles.block}>
        <Image style={styles.image} source={instUri} />
      </TouchableOpacity>

      <TouchableOpacity onPress={openGit} style={styles.block}>
        <Image style={styles.image} source={gitUri} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: 'rgba(94,83,115,1)',
    height: '100%',
    flexDirection: "row",
    justifyContent: "space-around",
  },
  block: {
    shadowColor: '#000',
    shadowOffset: {width: 2, height: -2},
    shadowOpacity: 0.5,
    elevation: 20,
    padding: 3,
    backgroundColor: "rgba(24, 181, 164, 1)",
    borderRadius: 10,
    height: "100%",
  },
  image: {
    height: 50,
    width: 50,
  },
});
