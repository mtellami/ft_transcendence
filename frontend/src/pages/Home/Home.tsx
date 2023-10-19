import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loading, Navbar } from '../../components/components'
import { UserContext } from '../../context/UserContext'
import './Home.css'

function Home() {
	const navigate = useNavigate()
	const { user } = useContext(UserContext)

	if (!user) {
		return <Loading />
	}

	return (
		<div className='layout'>
			<Navbar user={user} />
			<div className='body'>
				<div className='content'>
					<h1>PINGAME</h1>
					<h3>LET THE GAME BEGIN</h3>
					<button onClick={(e) => {e.preventDefault; navigate('/game')}}>PLAY</button>
				</div>
				<div className='image'>
					<img src='src/assets/home.jpeg' />
				</div>
			</div>
		</div>
	)
}

export default Home
