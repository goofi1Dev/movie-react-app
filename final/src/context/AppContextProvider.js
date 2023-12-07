import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { appContextReduser, initialState } from "./reducer";
import { signInAction } from "./action-creators";
import { isValidToken } from "../utils";

const appContext = createContext();
const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appContextReduser, initialState);

  useEffect(() => {
    const token = localStorage.getItem("accassToken");
    if (token && isValidToken(token)) {
      dispatch(signInAction(token));
    }
  }, []);

  const appState = useMemo(() => {
    return { state, dispatch };
  }, [state]); // use memo save mnichvnelobebs

  return (
    <appContext.Provider value={appState}>{children} </appContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(appContext);

  if (context) {
    return context;
  }
  throw new Error("App  Context error ");
};

export default AppContextProvider;
