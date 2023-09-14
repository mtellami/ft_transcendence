import { Navigate } from 'react-router-dom';
import './Login.css'
import Cookies from 'js-cookie';

function Login() {
	function auth42Api() {
		window.open(`${import.meta.env.VITE_API_URL}?client_id=${import.meta.env.VITE_API_UID}`
			+ `&redirect_uri=${import.meta.env.VITE_BACKEND_URL}/auth/callback&response_type=code`, '_self');
	}
	
	const token = Cookies.get('tranc_token')
	if (token) {
		// check if valid with backend
		return <Navigate to='/'/>
	}

  return (
    <>
			<button onClick={auth42Api}>Login with intra42</button>
    </>
  ) 
}

export default Login
