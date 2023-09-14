import { Navigate } from 'react-router-dom';
import './Home.css'
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

function Home() {
	const [isAuth, setIsAuth] = useState<boolean | undefined>(undefined)

	useEffect(() => {
		async function validateAuth() {
			const token = Cookies.get('tranc_token')
			if (token) {
				try {
					const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/validate`, {
						method: 'POST',
						headers: { 'Authorization': `Bearer ${token}` },
					})
					if (response.ok) {
						setIsAuth(true)
					} else {
						setIsAuth(false)
					}
				} catch (error) {
					setIsAuth(false)
				}
			} else {
				setIsAuth(false)
			}
		}
		validateAuth()
	}, [])

	if (isAuth === undefined) {
		return (
			<>
				<h1>Loading ...</h1>
			</>
		)
	} else if (isAuth) {
		return (
			<>
				<h1>Welcome to Home Page</h1>
			</>
		)
	} else {
		return <Navigate to='/login'/>
	}
}

export default Home
