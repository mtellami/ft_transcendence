import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { fetchUser } from '../../utils/utils'
import { Loading, Navbar } from '../../components/components'
import '../../styles/Layout.css'

function Chat () {
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
			<div className="layout">
				<Navbar user={user} />
				<h1>Chat Room {user.username}</h1>
			</div>
		)
	} else {
		return <Navigate to="/login" />
	}
	
}

export default Chat
