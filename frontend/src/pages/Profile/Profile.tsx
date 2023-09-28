import './Profile.css'
import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Loading from '../../components/Loading/Loading'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'
import { fetchUser } from '../../utils/fetchUser'
import { fetchProfile } from '../../utils/fetchProfile'
import Stat from '../../components/Profile/Stat'
import History from '../../components/Profile/History'
import Friend from '../../components/Profile/Friends'

function Profile () {
	const navigate = useNavigate()
	const [user, setUser] = useState<any>(undefined)
	const [profile, setProfile] = useState<any>(undefined)
	const { username } = useParams()
	const [focus, setFocus] = useState(0)

	useEffect(() => {
		const fetchUserProfile = async () => {
			const _user = await fetchUser()
			if (!_user) {
				setUser(null)
				setProfile(null)
			} else {
				setUser(_user)
				const _profile = await fetchProfile(username)
				setProfile(_profile)
			}
		}
		fetchUserProfile()
	}, [username])

	const setting = (e: any) => {
		e.preventDefault()
		navigate('/setting')
	}

	if (user === null) {
		return <Navigate to="/login" />
	} else if (profile === undefined) {
		return <Loading />
	} else if (profile) {
		const list = ['PROFILE', 'HISTORY', 'FRIENDS']
		return (
			<div className='layout'>
				<Navbar user={user} />
				<div className='profile'>
					<div className='p-sidebar'>
						<div className='card'>
							<img src={profile.avatar} />
							<span>online</span>
							<h3>{profile.username}</h3>
							<p>BRONZE</p>
						</div>
						<ul className='sections'>
							{list.map((item, index) => (
								<li key={index}
									className={focus === index ? 'focus' : ''}
									onClick={() => setFocus(index)}
								>
									{item}
								</li>
							))}
						</ul>
						<button onClick={setting}>SETTING</button>
					</div>
					<div className='p-content'>
						{focus == 0 && <Stat />}
						{focus == 1 && <History />}
						{focus == 2 && <Friend />}
					</div>
				</div>
			</div>
		)
	} else {
		return (<NotFound />)
	}
}

export default Profile
