import {
  GET_CLIENTS,
  GET_SINGLE_CLIENT,
  REMOVE_CLIENT,
} from "../action/clients";

const initialState = {
  clients: [],
  singleClient: null,
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return {
        ...state,
        clients: action.payload,
      };
    case REMOVE_CLIENT:
      return {
        ...state,
        clients: state.clients.filter(
          //   (client, index) => index !== action.payload
          (client) => client.uuid !== action.payload
        ),
      };
    case GET_SINGLE_CLIENT:
      return {
        ...state,
        singleClient: action.payload,
      };

    default:
      return state;
  }
};

export default clientReducer;