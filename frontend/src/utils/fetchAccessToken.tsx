export async function fetchAccessToken(code: string | null) {
	try {
		if (!code) {
			throw new Error('Bad request')
		}
		const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/login?code=${code}`)
		if (response.ok) {
			const data = await response.json()
			return data.access_token
		} else {
			throw new Error('Unauthorized')
		}
	} catch (error) {
		return null
	}
}
