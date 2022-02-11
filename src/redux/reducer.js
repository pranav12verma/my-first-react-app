import { setEmailError, setPassword, setPasswordError, setUserName } from "./action.types";

export const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case setUserName: {
        return {
          ...state,
          userName: payload
        };
      }
      case setPassword: {
        return {
          ...state,
          password: payload
        };
      }
      case setPasswordError: {
        return {
          ...state,
          passwordError: payload
        };
      }
      case setEmailError: {
        return {
          ...state,
          emailError: payload
        };
      }
      default:
        return state;
    }
  };
