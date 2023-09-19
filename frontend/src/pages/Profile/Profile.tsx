import './Profile.css'
import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Loading from '../../components/Loading/Loading'
import { Navigate, useParams } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'
import { fetchUser } from '../../utils/fetchUser'
import { fetchProfile } from '../../utils/fetchProfile'

function Profile () {
	const [user, setUser] = useState<any>(undefined)
	const [profile, setProfile] = useState<any>(undefined)
	const { username } = useParams()

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

	if (user === null) {
		return <Navigate to="/login" />
	} else if (profile === undefined) {
		return <Loading />
	} else if (profile) {
		return (
			<div className='layout'>
				<Navbar user={user} />
				<div className='profile'>
					<h1> ID: {profile.id}</h1>
					<h1> USERNAME: {profile.username}</h1>
					<h1> AVATAR URL: {profile.avatar}</h1>
					<h1> FRIENDS: {profile.friends}</h1>
					<h1> ONLINE: {profile.online.toString()}</h1>
				</div>
			</div>
		)
	} else {
		return (<NotFound />)
	}
}

export default Profile
