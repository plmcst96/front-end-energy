import { POST_LOGIN, POST_REGISTER } from "../action";

const initialState = {
  content: null,
  token: "",
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REGISTER:
      return {
        ...state,
        content: action.payload,
      };
    case POST_LOGIN:
      return {
        ...state,
        token: action.payload,
      }
    default:
      return state;
  }
};

export default registerReducer;
