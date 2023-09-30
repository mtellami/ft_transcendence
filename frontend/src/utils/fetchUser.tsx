import Cookies from 'js-cookie'
import axios from 'axios'

export async function fetchUser() {
	try {
		const token = Cookies.get(`${import.meta.env.VITE_ACCESS_TOKEN}`)
		if (token === undefined) {
			throw new Error('Acces token not found')
		}
		const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth`, {
			headers: { 'Authorization': `Bearer ${token}` },
		})
		if (response.status >= 200 && response.status < 300) {
			const data = await response.data
			return data
		} else {
			throw new Error('Unauthorized')
		}
	} catch (error) {
		Cookies.remove(`${import.meta.env.VITE_ACCESS_TOKEN}`)
		return null
	}
}

