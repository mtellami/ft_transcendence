import { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import ENV from '../../utils/env'

function Login() {
	const { login } = useAuth()

	const auth42Api = () => {
		window.open(`${ENV.API_URL}?`
			+ `client_id=${ENV.API_UID}&`
			+ `redirect_uri=${ENV.API_CALLBACK_URL}&`
			+ `response_type=code`, '_self')
	}
	
	useEffect(() => {
		const queryParams = new URLSearchParams(location.search)
		const code = queryParams.get('code')
		if (code) {
			login(code)
		}
	}, [])

  return (
    <div className='layout flex justify-center items-center'>
			<div className=''>
				<p className='text-red-600'>Welcome to PonGame</p>
				<button onClick={auth42Api}>
					{/* <img src='src/assets/intra.png' alt='42-icon' /> */}
					<span>Login with intranet</span>
				</button>
			</div>
    </div>
  ) 
}

export default Login
