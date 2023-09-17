import { Navigate } from 'react-router-dom'
import './Login.css'
import Cookies from 'js-cookie'

function Login() {
	function auth42Api() {
		window.open(`${import.meta.env.VITE_API_URL}?client_id=${import.meta.env.VITE_API_UID}`
			+ `&redirect_uri=${import.meta.env.VITE_BACKEND_URL}/auth/callback&response_type=code`, '_self');
	}
	
	const token = Cookies.get(`${import.meta.env.VITE_TOKEN_COOKIE}`)
	if (token !== undefined) {
		return <Navigate to='/'/>
	}

  return (
    <div className='layout login'>
			<div className='popup'>
				<p>Welcome to PonGame</p>
				<button onClick={auth42Api}>
					<img src='src/assets/intra.png' alt='42-icon' />
					<span>Login with intranet</span>
				</button>
			</div>
    </div>
  ) 
}

export default Login
