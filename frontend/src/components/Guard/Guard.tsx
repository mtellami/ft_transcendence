import { useEffect, useState } from "react"
import Cookies from 'js-cookie'
import Loading from "../Loading/Loading"
import { Navigate } from "react-router-dom"

function Guard( Component: React.FC ) {
	const [isAuth, setIsAuth] = useState<boolean | undefined>(undefined)
	const [user, setUser] = useState<any | null>(undefined)

	useEffect(() => {
		async function validateAuth() {
			try {
				const token = Cookies.get(`${import.meta.env.VITE_TOKEN_COOKIE}`)
				if (token === undefined) {
					throw new Error('Unauthorized')
				}
				const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth`, {
					headers: { 'Authorization': `Bearer ${token}` },
				})
				if (response.ok) {
					setIsAuth(true)
					const data = await response.json()
					setUser(data)
				} else {
					throw new Error('Unauthorized')
				}
			} catch (error) {
				setIsAuth(false)
				setUser(null)
			}
		}
		validateAuth()
	}, [])

	if (isAuth === undefined || user === undefined) {
		return (<Loading />)
	} else if (isAuth && user) {
		return (<Component user={user} />)
	} else {
		if (Cookies.get(`${import.meta.env.VITE_TOKEN_COOKIE}`) !== undefined)
			Cookies.remove(`${import.meta.env.VITE_TOKEN_COOKIE}`)
		return (<Navigate to='/login' />)
	}
}

export default Guard
