export const GET_PROVINCE = "GET_PROVINCE";
export const GET_TOWN = "GET_TOWN ";
export const GET_ADDRESS = "GET_ADDRESS";
export const POST_REGISTER = "POST_REGISTER";
export const POST_LOGIN = "POST_LOGIN";
export const POST_ADDRESS = "POST_ADDRESS";
export const DELETE_ADDRESS = "DELETE_ADDRESS";
export const PUT_ADDRESS = "PUT_ADDRESS";

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
        console.log(data);
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

export const postRegisterAdmin = (register) => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/auth/register/admin", {
        method: "POST",
        body: JSON.stringify(register),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        dispatch({
          type: POST_REGISTER,
          payload: data.content,
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
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        dispatch({
          type: POST_LOGIN,
          payload: { token: data.token, role: data.role },
        });
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        alert("Login effettuato con successo!");
      } else {
        throw new Error("The login is fail!");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const postAddress = (address, token) => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/api/addresses", {
        method: "POST",
        body: JSON.stringify(address),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        dispatch({
          type: POST_ADDRESS,
          payload: data,
        });

        alert("address saved correctly");
      } else {
        throw new Error("The Address is fail!");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const getProvince = (province, token) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "http://localhost:3001/provinces?page=0&size=30&orderBy=name",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({
          type: GET_PROVINCE,
          payload: data.content,
        });
      } else {
        throw new Error("Errore nel recupero delle province");
      }
    } catch (error) {
      console.log("Error!", error);
    }
  };
};

export const getTown = (town, token) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "http://localhost:3001/town?page=0&size=30&orderBy=uuid",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({
          type: GET_TOWN,
          payload: data.content,
        });
      } else {
        throw new Error("Errore nel recupero dei comuni");
      }
    } catch (error) {
      console.log("Error!", error);
    }
  };
};

export const getAddress = (token) => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/api/addresses", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data.content);
        dispatch({
          type: GET_ADDRESS,
          payload: data.content,
        });

        console.log("List address has been load correctly");
      } else {
        throw new Error("The Address list is fail!");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const removeAddress = (id, token) => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/api/addresses/" + id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        dispatch({
          type: DELETE_ADDRESS,
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

export const updateAddress = (id, updateAddress, token) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/addresses/" + id,
        {
          method: "PUT",
          body: JSON.stringify(updateAddress),
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: PUT_ADDRESS,
          payload: data.content,
        });
      } else {
        throw new Error("Errore nella modifica dell'indirizzo");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
