import { Navigate, useLocation } from "react-router-dom";
import Cookies from 'js-cookie';

function Auth() {
	const location = useLocation()
  const queryParams = new URLSearchParams(location.search)

  const token = queryParams.get('tranc_token')
  if (token) {
		if (Cookies.get('tranc_token') === undefined) {
			Cookies.set('tranc_token', token)
		}
    return <Navigate to='/' />
  } else {
    return <Navigate to='/login' />
  }
}

export default Auth
