import { POST_REGISTER } from "../action";

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
    default:
      return state;
  }
};

export default registerReducer;
