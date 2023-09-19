import './Home.css'
import { useEffect, useState } from 'react'
import { fetchUser } from '../../utils/fetchUser'
import { Navigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Loading from '../../components/Loading/Loading'

function Home() {
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
			<div className='layout container'>
				<Navbar user={user} />
				<h1>....</h1>
			</div>
		)
	} else {
		return <Navigate to="/login" />
	}
}

export default Home
