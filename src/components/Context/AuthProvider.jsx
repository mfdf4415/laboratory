import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthProviderContext = createContext();
export const AuthProviderContextDispatcher = createContext();

const LOCAL_STORAGE_AUTH_KEY = "authState";

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const userData =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) || false;
    setState(userData);
  }, []);

  useEffect(() => {
    const data = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, data);
  }, [state]);

  // setState(
  //   ({
  //     user: {
  //       id: 15,
  //       full_name: "MF",
  //       email: "mohammaderror419@gmail.com",
  //     },
  //     ["access token"]: {
  //       token: "108|iWs71WFzuzlUROM4DhnSvPszD6AxnFbwlcOOrhe3",
  //       ["device name"]: "m laptop",
  //     },
  //   })
  // );

  return (
    <AuthProviderContext.Provider value={state}>
      <AuthProviderContextDispatcher.Provider value={setState}>
        {children}
      </AuthProviderContextDispatcher.Provider>
    </AuthProviderContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthProviderContext);
export const useAuthActions = () => useContext(AuthProviderContextDispatcher);
