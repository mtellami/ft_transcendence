import '../../styles/Layout.css'
import Navbar from '../../components/Navbar/Navbar'
import { useEffect, useState } from 'react'
import { fetchUser } from '../../utils/fetchUser'
import Loading from '../../components/Loading/Loading'
import { Navigate } from 'react-router-dom'

function Setting () {
	const [user, setUser] = useState<any>(undefined)

	useEffect(() => {
		const getUser = async () => {
			const data = await fetchUser()
			setUser(data)
		}
		getUser()
	}, [])

	if (user === undefined) {
		return <Loading />
	} else if (user) {
		return (
			<div className='layout'>
				<Navbar user={user} />
				<h1>Change your Setting {user.username} </h1>
			</div>
		)
	} else {
		return <Navigate to="/login" />
	}
	
}

export default Setting
