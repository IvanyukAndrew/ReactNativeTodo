import { useState } from "react";
import { Navigation } from "./screens/Navigation";
import { AppContext } from "./AuthContext";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [authData, setAuthData] = useState(null);
  console.log('auth', authData)
  console.log(isAuth);

  const changeIsAuth = (value) => {
    setIsAuth(value);
  };

  const appData = {
    changeAuthData: setAuthData,
    changeIsAuth,
    authData,
  };

  const RootApp = () => {
    return <Navigation isAuth={isAuth} />;
  };

  return (
    <AppContext.Provider value={appData}>
      <RootApp />
    </AppContext.Provider>
  );
}
