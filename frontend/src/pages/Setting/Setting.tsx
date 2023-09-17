import '../../styles/Layout.css'
import Navbar from '../../components/Navbar/Navbar'

function Setting ({ user }: any) {
	return (
		<div className='layout'>
			<Navbar user={user} />
			<h1>Change your Setting {user.username} </h1>
		</div>
	)
}

export default Setting
