import { Navigate, useLocation } from "react-router-dom";
import Cookies from 'js-cookie';

function Auth() {
	const location = useLocation()
  const queryParams = new URLSearchParams(location.search)

  const token = queryParams.get('tranc_token')
  if (token) {
		Cookies.set('tranc_token', token, { expires: 1 })
    return <Navigate to='/' />
  } else {
    return <Navigate to='/login' />
  }
}

export default Auth
