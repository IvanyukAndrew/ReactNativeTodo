import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./Home";
import { Welcome } from "./Welcome";
import { Auth } from "./Auth";
import { NavigationContainer } from "@react-navigation/native";
import { SingIn } from "./SingIn";

const Stack = createNativeStackNavigator();

export const Navigation = ({ isAuth }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuth ? (
          <Stack.Screen name={"Home"} component={Home} />
        ) : (
          <Stack.Screen name={"Welcome"} component={Welcome} />
        )}
        <Stack.Screen name={"Auth"} component={Auth} />
        <Stack.Screen name={"SingIn"} component={SingIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
