import axios from "axios"

export async function fetchAccessToken(code: string | null) {
	try {
		if (!code) {
			throw new Error('Bad request')
		}
		const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/login?code=${code}`)
		if (response.status >= 200 && response.status < 300) {
			const data = response.data
			return data.access_token
		} else {
			throw new Error('Unauthorized')
		}
	} catch (error) {
		return null
	}
}
