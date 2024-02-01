export const POST_INVOICE = "POST_INVOICE"
export const GET_INVOICE = "GET_INVOICE"
export const DELETE_INVOICE = "DELETE_INVOICE"

export const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiNmM0MDgwNy03MTZmLTRiYzEtYTRlMC1mNDg2MDU0OTAyNjEiLCJpYXQiOjE3MDY3OTgzNjgsImV4cCI6MTcwNzQwMzE2OH0.YUiNjyQnSNZE63ZAf1h2cUWWEMGT8FDe-gsn41Av7e4";

export const postInvoice = (invoice) => {
    return async (dispatch) => {
        try {
            const res = await fetch('http://localhost:3001/api/invoices', {
                method: 'POST',
                body: JSON.stringify(invoice),
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })
            if (res.ok) {
                const data = await res.json()
                console.log(data)
                dispatch({
                    type: POST_INVOICE,
                    payload: data,
                })
                alert('Invoice has been registrated!')
            } else {
                throw new Error('The login is fail!')
            }
        } catch (error) {
            console.log(error)
        }
    }

}

export const getInvoice = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                'http://localhost:3001/api/invoices',
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`,
                    },
                }
            )
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                dispatch({
                    type: GET_INVOICE,
                    payload: data.content,
                })
            } else {
                throw new Error('Errore nel recupero delle province')
            }
        } catch (error) {
            console.log('Error!', error)
        }
    }
}

export const deleteInvoice = (id) => {
    return async (dispatch) => {
        try {
            const res = await fetch("http://localhost:3001/api/invoices/" + id, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (res.ok) {
                dispatch({
                    type: DELETE_INVOICE,
                    payload: id,
                });
            } else {
                throw new Error("Something went wrong.");
            }
        } catch (error) {
            console.log(error);
        }
    };
};