export const GET_USER = 'GET_USER'
export const DELETE_USER = 'DELETE_USER'

export const token =
  'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIyYzJmZjY2Ni02YTlmLTQxMDItOGNlYy00MGUyNTVhMTcyMWUiLCJpYXQiOjE3MDY4MDMyODMsImV4cCI6MTcwNzQwODA4M30.Z5H2gFFKxox9x2_CYGkkNrPa9Awz5zY-_Vtomu-uV06JyCcDOThqQkc36BmTPlKM'

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
