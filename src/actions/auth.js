import configureStore from "../store/configureStore";

const store = configureStore();

export const login = token => ({
  type: "LOGIN",
  token
});

export const logout = () => ({
  type: "LOGOUT"
});
