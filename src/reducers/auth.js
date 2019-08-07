const defaultState = { token: sessionStorage.getItem("token") };

export default (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      sessionStorage.setItem("token", action.token);
      return { token: action.token };
    case "LOGOUT":
      sessionStorage.removeItem("token");
      return {};
    default:
      return state;
  }
};
