import { useContext, useState } from "react";
import { AppContext } from "../AuthContext";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { fetchAuthRegister } from "../api/authApi";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [password, setPassword] = useState("");
  const { changeAuthData, changeIsAuth } = useContext(AppContext);

  const handleRegister = async () => {
    try {
      const fields = {
        email,
        firstName,
        secondName,
        password
      }

      const loginResult = await fetchAuthRegister(fields);
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
        <Text style={styles.registration.title}>REGISTRATION</Text>

        <TextInput
          style={styles.registration.input}
          placeholder="Email..."
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.registration.input}
          placeholder="First Name..."
          onChangeText={setFirstName}
          value={firstName}
        />
        <TextInput
          style={styles.registration.input}
          placeholder="Second Name..."
          onChangeText={setSecondName}
          value={secondName}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.registration.input}
          placeholder="Password..."
          onChangeText={setPassword}
          value={password}
        />

        <TouchableOpacity onPress={handleRegister} style={styles.registration.button}>
          <Text style={{ color: "white", fontSize: 22 }}>CREATE</Text>
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
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    elevation: 4,
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
