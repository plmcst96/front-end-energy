import {
  EDIT_CLIENT,
  GET_CLIENTS,
  GET_CLIENTS_WITH_FILTER,
  GET_SINGLE_CLIENT,
  REMOVE_CLIENT,
  SEND_MAIL,
} from "../action/clients";

const initialState = {
  clients: [],
  singleClient: null,
  clientsFiltered: [],
  editedClient: null,
  emailSent: null,
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
    case GET_CLIENTS_WITH_FILTER:
      return {
        ...state,
        clients: action.payload,
      };
    case EDIT_CLIENT:
      return {
        ...state,
        editedClient: action.payload,
      };
    case SEND_MAIL:
      return {
        ...state,
        emailSent: action.payload,
      };

    default:
      return state;
  }
};

export default clientReducer;
