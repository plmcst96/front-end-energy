export const POST_REGISTER = 'POST_REGISTER'
export const POST_LOGIN = 'POST_LOGIN'
export const POST_ADDRESS = 'POST_ADDRESS'
export const GET_PROVINCE = 'GET_PROVINCE'
export const GET_TOWN = 'GET_TOWN '

export const APIKEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3YTM5NTBkOS03YTAzLTQ5MWYtYjUwYS1lNDZhZWFkZjQxYzgiLCJpYXQiOjE3MDY3MDk3NjcsImV4cCI6MTcwNzMxNDU2N30.pW8i8TbnNG4juzFST-V_d00LeeP3CrOdxehVsldShUY'

export const postRegister = (register) => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        body: JSON.stringify(register),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        dispatch({
          type: POST_REGISTER,
          payload: data,
        })
        alert('Registrazione effettuato con successo!')
      } else {
        throw new Error('The login is fail!')
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const postLogin = (login) => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        body: JSON.stringify(login),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        dispatch({
          type: POST_LOGIN,
          payload: data,
        })
        localStorage.setItem('token', data.token)

        alert('Login effettuato con successo!')
      } else {
        throw new Error('The login is fail!')
      }
    } catch (error) {
      console.log('error', error)
    }
  }
}
export const postAddress = (address) => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3001/api/addresses', {
        method: 'POST',
        body: JSON.stringify(address),
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjNWY0M2NhZC1iMGMyLTRjNTQtYWE2YS1jYjA4ZWRiYzAzODIiLCJpYXQiOjE3MDY3NzY3NTcsImV4cCI6MTcwNzM4MTU1N30.MEZ-JhQxG6n3zrrDSZ5YmDJL1BW0YXjBO1lsMc3mltc',
          'Content-Type': 'application/json',
        },
      })
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        dispatch({
          type: POST_ADDRESS,
          payload: data,
        })

        alert('address saved correctly')
      } else {
        throw new Error('The Address is fail!')
      }
    } catch (error) {
      console.log('error', error)
    }
  }
}

export const getProvince = (province) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'http://localhost:3001/provinces?page=0&size=30&orderBy=name',
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIyYzJmZjY2Ni02YTlmLTQxMDItOGNlYy00MGUyNTVhMTcyMWUiLCJpYXQiOjE3MDY3MDA1OTcsImV4cCI6MTcwNzMwNTM5N30.SLeqiiCVTUMQZdHnkcdMgLAv1u3Y6LxtAqRO3r9nOeLgfky3IvBKvGujaJ4dFV_3 ',
          },
        }
      )
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        dispatch({
          type: GET_PROVINCE,
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

export const getTown = (town) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'http://localhost:3001/town?page=0&size=30&orderBy=uuid',
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIyYzJmZjY2Ni02YTlmLTQxMDItOGNlYy00MGUyNTVhMTcyMWUiLCJpYXQiOjE3MDY3MDA1OTcsImV4cCI6MTcwNzMwNTM5N30.SLeqiiCVTUMQZdHnkcdMgLAv1u3Y6LxtAqRO3r9nOeLgfky3IvBKvGujaJ4dFV_3 ',
          },
        }
      )
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        dispatch({
          type: GET_TOWN,
          payload: data.content,
        })
      } else {
        throw new Error('Errore nel recupero dei comuni')
      }
    } catch (error) {
      console.log('Error!', error)
    }
  }
}
