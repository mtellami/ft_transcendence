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
					<h1>LET THE GAME BEGIN</h1>
					<div className='game-menu'>
						<div className='matchmaking'>
							<img src='src/assets/matchmaking.jpeg' />
							<h2>Matchmaking</h2>
						</div>
						<div className='bootmatch'>
							<img src='src/assets/matchmaking.jpeg' />
							<h2>Challenge boot</h2>
						</div>
						<div className='preference'>
							<h2>Game preference</h2>
							<div className='game-setting'>
								<h3>paddle color:</h3>
								<input type='color' />
							</div>
							<div className='game-setting'>
								<h3>background color:</h3>
								<input type='color' />
							</div>
							<div className='game-setting'>
								<h3>ball color:</h3>
								<input type='color' />
							</div>
						</div>
					</div>
					<div className='game-box'>
						<ul className='game-invite'>
							<li>
								<img src={user.avatar} />
								<h2>{user.username}</h2>
								<button>invite</button>
							</li>
							<li>
								<img src={user.avatar} />
								<h2>{user.username}</h2>
								<button>invite</button>
							</li>
							<li>
								<img src={user.avatar} />
								<h2>{user.username}</h2>
								<button>invite</button>
							</li>
						</ul>
						<ul className='leaderboard'>
							<li>
								<h2 className='ranking'>#1</h2>
								<img src={user.avatar} />
								<h3>{user.username}</h3>
								<span className='score'>0</span>
								<span className='played-match'>0</span>
								<span className='win-rate'>0</span>
							</li>
							<li>
								<h2 className='ranking'>#1</h2>
								<img src={user.avatar} />
								<h3>{user.username}</h3>
								<span className='score'>0</span>
								<span className='played-match'>0</span>
								<span className='win-rate'>0</span>
							</li>
							<li>
								<h2 className='ranking'>#1</h2>
								<img src={user.avatar} />
								<h3>{user.username}</h3>
								<span className='score'>0</span>
								<span className='played-match'>0</span>
								<span className='win-rate'>0</span>
							</li>
						</ul>
						<ul className='live-games'>live matches</ul>
					</div>
				</div>
			</div>
		)
	} else {
		return <Navigate to="/login" />
	}
	
}

export default Game
