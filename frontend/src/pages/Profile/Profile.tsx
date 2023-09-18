import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Profile.css'
import Loading from '../../components/Loading/Loading'
import { useParams } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'
import Cookies from 'js-cookie'

function Profile ({ user }: any) {
	const [userProfile, setUserProfile] = useState<any | null>(undefined)
	const { username } = useParams()

	useEffect(() => {
		const fetchUserProfile = async () => {
			const token = Cookies.get(`${import.meta.env.VITE_TOKEN_COOKIE}`)
			if (token === undefined) {
				setUserProfile(null)
				return
			}
			const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/${username}`, {
				headers: { 'Authorization': `Bearer ${token}` },
			})
			if (response.ok) {
				const data = await response.json()
				setUserProfile(data)
			} else {
				setUserProfile(null)
			}
		}
		fetchUserProfile()
	}, [username])

	if (userProfile === undefined) {
		return <Loading />
	} else if (userProfile) {
		return (
			<div className='layout'>
				<Navbar user={user} />
				<div className='profile'>
					<h1> ID: {userProfile.id}</h1>
					<h1> USERNAME: {userProfile.username}</h1>
					<h1> EMAIL: {userProfile.email}</h1>
					<h1> AVATAR URL: {userProfile.avatar}</h1>
					<h1> FRIENDS: {userProfile.friends}</h1>
					<h1> ONLINE: {userProfile.online.toString()}</h1>
				</div>
			</div>
		)
	} else {
		return (<NotFound />)
	}
}

export default Profile
