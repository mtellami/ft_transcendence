import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
	const navigate = useNavigate()

	return (
		<div className='layout'>
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
