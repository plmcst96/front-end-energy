import { GET_CLIENTS, REMOVE_CLIENT } from "../action/clients";
const initialState = {
  clients: [],
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

    default:
      return state;
  }
};

export default clientReducer;
