export const POST_REGISTER = "POST_REGISTER";

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
