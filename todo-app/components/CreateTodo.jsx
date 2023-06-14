import { useContext, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { fetchCreateTodo, fetchTodo } from "../api/todoApi";
import { AppContext, TodoContext } from "../AuthContext";

export const CreateTodo = () => {
  const { authData } = useContext(AppContext);
  const { changeTodoData } = useContext(TodoContext);
  const [value, setValue] = useState("");

  const createTodo = async () => {
    try {
      fetchCreateTodo(value, authData.token);
      setValue("");
      const loginResult = await fetchTodo(authData._id);
      changeTodoData(loginResult);
    } catch (error) {
      console.log("err delete", error);
    }
  };

  return (
    <View style={styles.createBox}>
      <Text style={styles.createBox.header}>NEW NOTE</Text>
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={styles.createBox.input}
          placeholder="Add Todo"
          onChangeText={setValue}
          value={value}
        />
        <TouchableOpacity onPress={createTodo} style={styles.createBox.button}>
          <Text style={{ color: "white" }}>Add Todo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  createBox: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "rgba(24, 181, 164, 1)",
    marginLeft: 15,
    marginRight: 15,
    height: 200,
    borderRadius: 25,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    elevation: 4,
    header: {
      fontSize: 25,
      fontWeight: 600,
    },
    input: {
      backgroundColor: "#fff",
      borderWidth: 1,
      padding: 10,
      margin: 10,
      width: "90%",
      borderRadius: 5,
      alignContent: "center",
    },
    button: {
      backgroundColor: "black",
      padding: 10,
      margin: 5,
      alignItems: "center",
      width: "90%",
      borderRadius: 5,
    },
  },
});
