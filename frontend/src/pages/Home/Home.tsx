import { Navigate } from 'react-router-dom'
import './Home.css'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import Loading from '../../component/Loading/Loading'

function Home() {
	const [isAuth, setIsAuth] = useState<boolean | undefined>(undefined)
	const [data, setData] = useState<any | null>(undefined)

	useEffect(() => {
		async function validateAuth() {
			const token = Cookies.get(`${import.meta.env.VITE_TOKEN_COOKIE}`)
			if (token !== undefined) {
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
		return (<Loading />)
	} else if (isAuth && data) {
		return (
			<div className='layout container'>
				<h1 className='name'>{data.username}</h1>
				<img className='avatar' src={`${data.avatar}`} />
			</div>
		)
	} else {
		if (Cookies.get(`${import.meta.env.VITE_TOKEN_COOKIE}`) !== undefined)
			Cookies.remove(`${import.meta.env.VITE_TOKEN_COOKIE}`)
		return <Navigate to='/login'/>
	}
}

export default Home
