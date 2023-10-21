import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'
import './Profile.css'
import { fetchProfile } from '../../utils/utils'
import {
	Loading,
	Stat,
	History,
	Friends
} from '../../components/components'

function Profile () {
	const navigate = useNavigate()
	const [user, setUser] = useState<any>(undefined)
	const [profile, setProfile] = useState<any>(undefined)
	const { username } = useParams()
	const [focus, setFocus] = useState(0)


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
				<div className='profile'>
					<div className='p-sidebar'>
						<div className='card'>
							<img src={profile.avatar} />
							<span>{profile.online ? 'online' : 'offline'}</span>
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
						{focus == 0 && <Stat profile={profile} user={user} />}
						{focus == 1 && <History profile={profile} />}
						{focus == 2 && <Friends profile={profile} />}
					</div>
				</div>
			</div>
		)
	} else {
		return (<NotFound />)
	}
}

export default Profile
