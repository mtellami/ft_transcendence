import { useContext } from 'react'
import { Loading, Navbar } from '../../components/components'
import './Game.css'
import { UserContext } from '../../context/UserContext'

function Game () {
	const { user } = useContext(UserContext)

	if (!user) {
		return <Loading />
	}

	return (
		<div className="layout">
			<Navbar user={user} />
			<div className='game'>Game page: create multiSections page</div>
		</div>
	)
}

export default Game
