import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export const BurgerOpen = ({ onPress }) => {
  const closeUri = require("../assets/close.png");

  return (
    <View style={styles.burgerOpen}>
      <TouchableOpacity style={styles.burgerOpen.close} onPress={onPress}>
        <Image style={styles.burgerOpen.image} source={closeUri} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  burgerOpen: {
    position: "absolute",
    elevation: 5,
    right: 0,
    top: 0,
    height: 1500,
    width: "70%",
    backgroundColor: "rgba(24, 181, 164, 1)",
    image: {
      margin: 15,
      height: 30,
      width: 30,
    },
  },
});
