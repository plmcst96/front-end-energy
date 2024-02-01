export const GET_USER = 'GET_USER'
export const DELETE_USER = 'DELETE_USER'
export const SET_ADMIN = 'SET_ADMIN'
export const SET_USER = 'SET_USER'

export const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjNWY0M2NhZC1iMGMyLTRjNTQtYWE2YS1jYjA4ZWRiYzAzODIiLCJpYXQiOjE3MDY4MTI4ODAsImV4cCI6MTcwNzQxNzY4MH0.3pquCssLsOtsPKgcJksbWyh3X-UDbaxJpx1oV2ksi5M'

export const getUsers = (user) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'http://localhost:3001/users?page=0&size=30&orderBy=uuid',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        dispatch({
          type: GET_USER,
          payload: data.content,
        })
      } else {
        throw new Error('Errore nel recupero degli utenti')
      }
    } catch (error) {
      console.log('Error', error)
    }
  }
}

export const removeUser = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/users/' + id, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (response.ok) {
        dispatch({
          type: DELETE_USER,
          payload: id,
        })
      } else {
        throw new Error("Errore nell'eliminazione dell'utente")
      }
    } catch (error) {
      console.log('Error', error)
    }
  }
}

// "/{uuid}/set-admin"
export const setAdmin = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'http://localhost:3001/users/' + id + '/set-admin',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      if (response.ok) {
        dispatch({
          type: SET_ADMIN,
          payload: id,
        })
      } else {
        throw new Error("Error nel settare l'admin")
      }
    } catch (error) {
      console.log('Error', error)
    }
  }
}

// /{uuid}/set-user
export const setUser = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'http://localhost:3001/users/' + id + '/set-user',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      if (response.ok) {
        dispatch({
          type: SET_USER,
          payload: id,
        })
      } else {
        throw new Error('Error nel settare lo user')
      }
    } catch (error) {
      console.log('Error', error)
    }
  }
}
