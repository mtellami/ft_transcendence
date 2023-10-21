import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { UserContext } from '../context/UserContext'
import ENV from '../utils/env'

const login = async (code: string) => {
	const navigate = useNavigate()
	try {
		const response = await axios.post(`${ENV.BACKEND_URL}/auth`, {
			data: { 'code': code }
		})
		if (response.status >= 200 && response.status < 300) {
			Cookies.set(ENV.ACCESS_TOKEN, response.data)
			navigate('/')
		} else {
			throw new Error
		}
	} catch (error) {
		navigate('/login')
	}
}

const useAuth = () => {
	const [auth, setAuth] = useState<undefined | boolean>(undefined)
	const { setUser } = useContext(UserContext)

	useEffect(() => {
		(async () => {
			try {
				const token = Cookies.get(ENV.ACCESS_TOKEN)
				if (token === undefined) {
					throw new Error
				}
				const response = await axios.get(`${ENV.BACKEND_URL}/auth`)
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
		})()
	}, [])

	return { auth, login }
}

export default useAuth
