import { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { fetchAuthLogin } from "../api/authApi";
import { AppContext } from "../AuthContext";

export const SingIn = ({ navigation }) => {
  const [email, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const { changeAuthData, changeIsAuth } = useContext(AppContext);

  const handleLogin = async () => {
    try {
      const loginResult = await fetchAuthLogin(email, password);
      changeAuthData(loginResult);
      if (loginResult) {
        changeIsAuth(true);
      }
    } catch (error) {
      console.warn("error", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.registration}>
        <Text style={styles.registration.title}>SING IN</Text>

        <TextInput
          style={styles.registration.input}
          placeholder="Email..."
          onChangeText={(text) => setGmail(text)}
          value={email}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.registration.input}
          placeholder="Password..."
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <TouchableOpacity
          onPress={handleLogin}
          style={styles.registration.button}
        >
          <Text style={{ color: "white", fontSize: 22 }}>SING IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#48416c",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  registration: {
    width: "90%",
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
      padding: 5,
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
      padding: 15,
      margin: 5,
      alignItems: "center",
      width: 200,
      borderRadius: 5,
    },
  },
});
