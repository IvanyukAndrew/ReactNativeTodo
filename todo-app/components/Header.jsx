import { useContext, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { BurgerOpen } from "./BurgerOpen";
import { AppContext } from "../AuthContext";

export const Header = () => {
  const burgerUri = require("../assets/burger.jpg");
  const [isBurgerOpen, setIsBurgerOpen] = useState(true);
  const { changeIsAuth } = useContext(AppContext);

  const handleLogOutClick = () => {
    changeIsAuth(false)
  };

  return (
    <View style={styles.header}>
      <Text style={styles.header.logo}>BUSY</Text>
      {isBurgerOpen ? (
        <TouchableOpacity onPress={handleLogOutClick}>
          <Text style={styles.header.button}>Log out</Text>
        </TouchableOpacity>
      ) : (
        <BurgerOpen onPress={handleBurgerClick} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    logo: {
      color: "#fff",
      fontSize: 80,
      fontWeight: 700,
    },
    button: {
      fontSize: 24,
      marginRight: 17,
      backgroundColor: "#ff6633",
      padding: 10,
      borderRadius: 15,
      shadowOffset: { width: 4, height: 4 },
      shadowRadius: 2,
      shadowOpacity: 0.5,
      elevation: 4,
    },
  },
});
