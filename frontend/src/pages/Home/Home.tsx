import { Navigate } from 'react-router-dom';
import './Home.css'
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

function Home() {
	const [isAuth, setIsAuth] = useState<boolean | undefined>(undefined)
	const [data, setData] = useState<any | null>(undefined)

	useEffect(() => {
		async function validateAuth() {
			const token = Cookies.get('tranc_token')
			if (token) {
				try {
					const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user`, {
						method: 'POST',
						headers: { 'Authorization': `Bearer ${token}` },
					})
					if (response.ok) {
						setIsAuth(true)
						const user = await response.json()
						setData(user)
					} else {
						throw new Error('Unauthorized')
					}
				} catch (error) {
					setIsAuth(false)
					setData(null)
				}
			} else {
				setIsAuth(false)
				setData(null)
			}
		}
		validateAuth()
	}, [])

	if (isAuth === undefined || data === undefined) {
		return (
			<>
				<h1>Loading ...</h1>
			</>
		)
	} else if (isAuth && data) {
		return (
			<div className='container'>
				<h1 className='name'>{data.username}</h1>
				<img className='avatar' src={`${data.avatar}`} />
			</div>
		)
	} else {
		if (Cookies.get('tranc_token'))
			Cookies.remove('tranc_token')
		return <Navigate to='/login'/>
	}
}

export default Home
