import Cookies from 'js-cookie'

export async function fetchProfile (username: string | undefined) {
	try {
		const token = Cookies.get(`${import.meta.env.VITE_ACCESS_TOKEN}`)
		if (token === undefined) {
			throw new Error('Access token not found`')
		}
		const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/${username}`, {
			headers: { 'Authorization': `Bearer ${token}` },
		})
		if (response.ok) {
			const data = await response.json()
			return data
		} else {
			throw new Error('User not found')
		}
	} catch (error) {
		return null
	}
}
