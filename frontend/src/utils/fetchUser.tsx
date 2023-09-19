import Cookies from 'js-cookie'

export async function fetchUser() {
	try {
		const token = Cookies.get(`${import.meta.env.VITE_ACCESS_TOKEN}`)
		if (token === undefined) {
			throw new Error('Acces token not found')
		}
		const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth`, {
			headers: { 'Authorization': `Bearer ${token}` },
		})
		if (response.ok) {
			const data = await response.json()
			return data
		} else {
			throw new Error('Unauthorized')
		}
	} catch (error) {
		Cookies.remove(`${import.meta.env.VITE_ACCESS_TOKEN}`)
		return null
	}
}

