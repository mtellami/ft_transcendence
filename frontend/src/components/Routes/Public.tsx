import { Navigate, Outlet } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import { Loading } from "../components"

const Public = () => {
	const { auth } = useAuth()

	switch (auth) {
		case undefined:
			return <Loading />
		case true:
			return <Navigate to='/' />
		default:
			return <Outlet />
	}
}

export default Public
