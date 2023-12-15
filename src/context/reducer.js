import { parseToken, toggleStorage } from "../utils";
import appContextActions from "./action";

export const initialState = {
  isUserAuthenticated: false,
  user: {},
};

export const appContextReduser = (state, actions) => {
  switch (actions.type) {
    case appContextActions.signIn: {
      toggleStorage(actions.payload);
      const user = parseToken(actions.payload);
      console.log(user);
      return { ...state, isUserAuthenticated: true, user };
    }

    case appContextActions.signOut: {
      toggleStorage();
      return { ...state, isUserAuthenticated: false, user: {} };
    }
    default:
      return state;
  }
};
