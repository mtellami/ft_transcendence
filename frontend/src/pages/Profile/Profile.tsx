import Navbar from '../../components/Navbar/Navbar'
import './Profile.css'

function Profile ({ user }: any) {
	return (
		<div className='layout'>
			<Navbar user={user} />
			<h1>User Profile viewed by {user.username}</h1>
		</div>
	)
}

export default Profile
