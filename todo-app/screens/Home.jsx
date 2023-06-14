import { StyleSheet, StatusBar, View } from "react-native";
import { CreateTodo } from "../components/CreateTodo";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { TodoList } from "../components/TodoList";
import { useContext, useEffect, useState } from "react";
import { fetchTodo } from "../api/todoApi";
import { AppContext, TodoContext } from "../AuthContext";

export const Home = () => {
  const { authData } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const todoData = {
    changeTodoData: setData,
    todoData: data,
  };

  const handleTodods = async () => {
    try {
      setIsLoading(true);
      const loginResult = await fetchTodo(authData._id);
      setData(loginResult);
      setIsLoading(false);
    } catch (error) {
      console.warn("error", error);
    }
  };

  useEffect(() => {
    handleTodods();
  }, []);

  return (
    <View style={styles.container}>
      <TodoContext.Provider value={todoData}>
        <Header />

        <CreateTodo />

        <TodoList data={data} />

        <Footer />
      </TodoContext.Provider>

      <StatusBar theme="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#48416c",
    position: "relative",
  },
});
