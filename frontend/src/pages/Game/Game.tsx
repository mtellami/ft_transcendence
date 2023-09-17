import '../../styles//Layout.css'
import Navbar from '../../components/Navbar/Navbar'

function Game ({ user }: any) {
	return (
		<div className="layout">
			<Navbar user={user} />
			<h1>Lets play {user.username}, its Ping Pong Game</h1>
		</div>
	)
}

export default Game
