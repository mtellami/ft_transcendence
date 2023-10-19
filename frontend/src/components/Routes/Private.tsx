import { Navigate, Outlet } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import { Loading } from "../components"

const Private = () => {
	const { auth } = useAuth()

	switch (auth) {
		case undefined:
			return <Loading />
		case false:
			return <Navigate to='/login' />
		default:
			return <Outlet />
	}
}

export default Private
