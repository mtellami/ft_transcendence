import './Home.css'
import { useEffect, useState } from 'react'
import { fetchUser } from '../../utils/fetchUser'
import { Navigate, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Loading from '../../components/Loading/Loading'

function Home() {
	const [user, setUser] = useState<any>(undefined)
	const navigate = useNavigate()

	useEffect(() => {
		const getUser = async () => {
			const data = await fetchUser()
			setUser(data)
		}
		getUser()
	}, [])

	const play = (e: any) => {
		e.preventDefault()
		navigate('/game')
	}

	if (user === undefined) {
		return <Loading />
	} else if (user) {
		return (
			<div className='layout'>
				<Navbar user={user} />
				<div className='body'>
					<div className='content'>
						<h1>PINGAME</h1>
						<h3>LET THE GAME BEGIN</h3>
						<button onClick={play}>PLAY</button>
					</div>
					<div className='image'>
						<img src='src/assets/home.jpeg' />
					</div>
				</div>
			</div>
		)
	} else {
		return <Navigate to="/login" />
	}
}

export default Home
