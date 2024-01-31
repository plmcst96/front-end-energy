export const POST_REGISTER = "POST_REGISTER";
export const POST_LOGIN = "POST_LOGIN";
export const POST_ADDRESS = "POST_ADDRESS";

export const APIKEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3YTM5NTBkOS03YTAzLTQ5MWYtYjUwYS1lNDZhZWFkZjQxYzgiLCJpYXQiOjE3MDY3MDk3NjcsImV4cCI6MTcwNzMxNDU2N30.pW8i8TbnNG4juzFST-V_d00LeeP3CrOdxehVsldShUY";

export const postRegister = (register) => {
    return async (dispatch) => {
        try {
            const res = await fetch("http://localhost:3001/auth/register", {
                method: "POST",
                body: JSON.stringify(register),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (res.ok) {
                const data = await res.json();
                console.log(data)
                dispatch({
                    type: POST_REGISTER,
                    payload: data,
                });
                alert("Registrazione effettuato con successo!");
            } else {
                throw new Error("The login is fail!");
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const postLogin = (login) => {
    return async (dispatch) => {
        try {
            const res = await fetch("http://localhost:3001/auth/login", {
                method: "POST",
                body: JSON.stringify(login),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (res.ok) {
                const data = await res.json()
                console.log(data)
                dispatch({
                    type: POST_LOGIN,
                    payload: data
                })
                localStorage.setItem("token", data.token)

                alert("Login effettuato con successo!")
            } else {
                throw new Error("The login is fail!")
            }
        } catch (error) {
            console.log("error", error)
        }
    }
}
export const postAddress = (address) => {
    return async (dispatch) => {
        try {
            const res = await fetch("http://localhost:3001/api/addresses", {
                method: "POST",
                body: JSON.stringify(address),
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjNWY0M2NhZC1iMGMyLTRjNTQtYWE2YS1jYjA4ZWRiYzAzODIiLCJpYXQiOjE3MDY3MjQ3NzYsImV4cCI6MTcwNzMyOTU3Nn0._JZbc9MoAmcdgGF_kRjGhwrPCeqIoRWGD_8FX3gmSCI",
                    "Content-Type": "application/json",
                },
            })
            if (res.ok) {
                const data = await res.json()
                console.log(data)
                dispatch({
                    type: POST_ADDRESS,
                    payload: data
                })


                alert("address saved correctly")
            } else {
                throw new Error("The Address is fail!")
            }
        } catch (error) {
            console.log("error", error)
        }
    }
}
