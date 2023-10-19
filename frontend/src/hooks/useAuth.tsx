import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { UserContext } from '../context/UserContext'

const useAuth = () => {
	const [auth, setAuth] = useState<undefined | boolean>(undefined)
	const navigate = useNavigate()
	const { setUser } = useContext(UserContext)

	useEffect(() => {
		const authenticate = async () => {
			try {
				const token = Cookies.get(`${import.meta.env.VITE_ACCESS_TOKEN}`)
				if (token === undefined) {
					throw new Error
				}
				const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth`, {
					headers: { 'Authorization': `Bearer ${token}` },
				})
				if (response.status >= 200 && response.status < 300) {
					setAuth(true)
					setUser(response.data)
				} else {
					throw new Error
				}
			} catch (error) {
				setAuth(false)
				setUser(null)
			}
		}

		authenticate()
	}, [])

	const login = async (code: string) => {
		try {
			const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/login?code=${code}`)
			if (response.status >= 200 && response.status < 300) {
				Cookies.set(`${import.meta.env.VITE_ACCESS_TOKEN}`, response.data)
				navigate('/')
			} else {
				throw new Error
			}
		} catch (error) {
			navigate('/login')
		}
	}

	const logout = () => {
		Cookies.remove(import.meta.env.VITE_ACCESS_TOKEN);
		navigate('/login')
	}

	return { auth, login, logout }
}

export default useAuth
