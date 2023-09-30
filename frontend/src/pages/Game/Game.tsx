import { Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchUser } from '../../utils/utils'
import { Loading, Navbar } from '../../components/components'
import './Game.css'

function Game () {
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
				<div className='game'>
					<img src='src/assets/game.png' />
				</div>
			</div>
		)
	} else {
		return <Navigate to="/login" />
	}
	
}

export default Game
