import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import { Todo } from "./Todo";

export const TodoList = ({ data }) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Todo item={item} />}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    height: 300,
  },
});
