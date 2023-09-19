import { useEffect, useState } from 'react'
import './Leaderboard.css'
import { fetchUser } from '../../utils/fetchUser'

function Leaderboard () {
	const [user, setUser] = useState<any>(undefined)

	useEffect(() => {
		const getUser = async () => {
			const data = await fetchUser()
			setUser(data)
		}
		getUser()
	}, [])

	return (
		<div className='layout'>
			<h1>Leaderboard list, where are you ${user.username}</h1>
		</div>
	)
}

export default Leaderboard

