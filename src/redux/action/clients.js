export const GET_CLIENTS = "GET_CLIENTS";
export const REMOVE_CLIENT = "REMOVE_CLIENT";

export const token =
  "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJlMmViZGU2Yy04MWM0LTQ1ZjgtODkxZS0xYjE5NGQxM2UyM2EiLCJpYXQiOjE3MDY3MTYwMjgsImV4cCI6MTcwNzMyMDgyOH0.Y8VWhKjko3chxjiHuhtX0DrKgWvCxvlPa683QqM7-ImF7WsAHYyVogTEZOnNAoPb";
export const getAllCLients = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/clients", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_CLIENTS,
          payload: data,
        });
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeClient = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/clients/" + id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        dispatch({
          type: REMOVE_CLIENT,
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
