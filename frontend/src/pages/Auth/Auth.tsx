import { Navigate, useLocation } from "react-router-dom"
import Cookies from 'js-cookie'

function Auth() {
	const location = useLocation()
  const queryParams = new URLSearchParams(location.search)

  const token = queryParams.get(`${import.meta.env.VITE_TOKEN_COOKIE}`)
  if (token) {
		if (Cookies.get(`${import.meta.env.VITE_TOKEN_COOKIE}`) === undefined) {
			Cookies.set(`${import.meta.env.VITE_TOKEN_COOKIE}`, token)
		}
    return <Navigate to='/' />
  } else {
    return <Navigate to='/login' />
  }
}

export default Auth
