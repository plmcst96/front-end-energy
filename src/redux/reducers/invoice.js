import { DELETE_INVOICE, GET_INVOICE, POST_INVOICE } from "../action/invoice"


const initialState = {
    invoices: null,
    list: []
}

const invoiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_INVOICE:
            return {
                ...state,
                invoices: action.payload
            }
        case GET_INVOICE:
            return {
                ...state,
                list: action.payload
            }
        case DELETE_INVOICE:
            return {
                ...state,
                list: state.list.filter(
                    (inv) => inv.uuid !== action.payload
                )
            }
        default:
            return state
    }

}
export default invoiceReducer