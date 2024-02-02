export const GET_CLIENTS = "GET_CLIENTS";
export const REMOVE_CLIENT = "REMOVE_CLIENT";
export const ADD_CLIENT = "ADD_CLIENT";
export const GET_SINGLE_CLIENT = "GET_SINGLE_CLIENT";
export const GET_CLIENTS_WITH_FILTER = "GET_CLIENTS_WITH_FILTER";

export const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5N2FkZDhhMy00MmNjLTQxYjMtOGFmMS0wNzQ1OWMxNzkyYTEiLCJpYXQiOjE3MDY4NzA3MjAsImV4cCI6MTcwNzQ3NTUyMH0.zsGKdyBgbule-ZxgYiZBXsmXelq6gHSoSaTXywhJ-Zk";
export const getAllCLients = (filtersClients) => {
  const { minRevenue, maxRevenue, businessName } = filtersClients;
  return async (dispatch) => {
    try {
      // Crea i parametri di query in base ai filtri disponibili
      const queryParams = new URLSearchParams();
      if (minRevenue) queryParams.append("minRevenue", minRevenue);
      if (maxRevenue) queryParams.append("maxRevenue", maxRevenue);
      if (businessName) queryParams.append("businessName", businessName);

      // Costruisci la URL con i parametri di query
      const url = `http://localhost:3001/clients?${queryParams.toString()}`;

      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
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
export const addClient = (newClient) => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/clients", {
        method: "POST",
        body: JSON.stringify(newClient),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        dispatch({
          type: ADD_CLIENT,
          payload: newClient,
        });
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSingleClient = (uuid) => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/clients/" + uuid, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        console.log("sono nella fetch");
        dispatch({
          type: GET_SINGLE_CLIENT,
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

export const getAllCLientsWithFilter = (filtersClients) => {
  const minAmount = filtersClients.minAmount;
  console.log(minAmount);
  const maxAmount = filtersClients.maxAmount;
  return async (dispatch) => {
    try {
      const res = await fetch(
        "http://localhost:3001/clients?minAmount=" + minAmount,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        dispatch({
          type: GET_CLIENTS_WITH_FILTER,
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
