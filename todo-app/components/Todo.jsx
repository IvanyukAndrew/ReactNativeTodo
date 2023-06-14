import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fetchTodo, fetchTodoDelet } from "../api/todoApi";
import { useContext } from "react";
import { AppContext, TodoContext } from "../AuthContext";

export const Todo = ({ item }) => {
  const { authData } = useContext(AppContext);
  const { changeTodoData } = useContext(TodoContext);
  const binUri = require("../assets/bin.png");

  const removeTodo = async () => {
    try {
      fetchTodoDelet(item._id);
      const loginResult = await fetchTodo(authData._id);
      changeTodoData(loginResult);
    } catch (error) {
      console.log('err delete', error)
    }
  };

  return (
    <View style={styles.list}>
      <Text style={styles.todo}>{item.title}</Text>
      <TouchableOpacity style={styles.button} onPress={removeTodo}>
        <Image style={styles.image} source={binUri} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 40,
    backgroundColor: "rgba(24, 181, 164, 1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    elevation: 4,
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    padding: 20,
    backgroundColor: "#3c3257",
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 15,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    elevation: 7,
  },
  todo: {
    fontSize: 20,
  },
  image: {
    height: 30,
    width: 30,
  },
});
