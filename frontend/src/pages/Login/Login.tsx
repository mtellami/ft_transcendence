import './Login.css'

function Login() {
	function auth42Api() {
		window.open(`${import.meta.env.VITE_API_URL}?client_id=${import.meta.env.VITE_API_UID}`
			+ `&redirect_uri=${import.meta.env.VITE_BACKEND_URL}/auth/callback&response_type=code`, '_self');
	}

  return (
    <>
			<button onClick={auth42Api}>Login with intra42</button>
    </>
  ) 
}

export default Login
