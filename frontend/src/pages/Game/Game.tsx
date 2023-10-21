import { useContext } from 'react'
import { Loading } from '../../components/components'
import './Game.css'
import { UserContext } from '../../context/UserContext'

function Game () {
	const { user } = useContext(UserContext)

	if (!user) {
		return <Loading />
	}

	return (
		<div className="layout">
			<div className='game'>Game page: create multiSections page</div>
		</div>
	)
}

export default Game
