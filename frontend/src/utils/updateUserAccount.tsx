import Cookies from 'js-cookie'
import axios from 'axios'

export async function updateUserAccount(form: any) {
	const token = Cookies.get(`${import.meta.env.VITE_ACCESS_TOKEN}`)
	try {
		const response = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/user`, {
			headers: {
				'Authorization': `Bearer ${token}`,
			},
			body: form
		})
		if (response.status >= 200 && response.status < 300) {
			return true
		} else {
			throw new Error('Server error')
		}
	} catch (error) {
		return null
	}
}
