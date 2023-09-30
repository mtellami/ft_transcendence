import Cookies from 'js-cookie'
import axios from 'axios'

export async function removeUserAccount() {
	const token = Cookies.get(`${import.meta.env.VITE_ACCESS_TOKEN}`)
	try {
		const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/user`, {
			headers: { 'Authorization': `Bearer ${token}` }
		})
		if (response.status >= 200 && response.status < 300) {
			Cookies.remove(`${import.meta.env.VITE_ACCESS_TOKEN}`)
			return true
		} else {
			throw new Error('Server error')
		}
	} catch (error) {
		return false
	}
}
