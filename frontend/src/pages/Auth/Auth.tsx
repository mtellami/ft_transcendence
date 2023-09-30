import { useEffect, useState } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { Loading } from "../../components/components"
import { fetchAccessToken } from "../../utils/utils"
import Cookies from 'js-cookie'

function Auth() {
	const [token, setToken] = useState<any>(undefined)
	const location = useLocation()

	const queryParams = new URLSearchParams(location.search)

	useEffect(() => {
		const authenticate = async () => {
			const code = queryParams.get('code')
			const accessToken = await fetchAccessToken(code)
			setToken(accessToken)
			if (accessToken) {
				Cookies.set(`${import.meta.env.VITE_ACCESS_TOKEN}`, accessToken)
			}
		}
		authenticate()
	}, [])

	if (token === undefined) {
		return <Loading />
	} else if (token) {
		return <Navigate to='/' />
	} else  {
		return <Navigate to='/login' />
	}
}

export default Auth
