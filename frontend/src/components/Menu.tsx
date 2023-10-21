import { User } from "../interfaces/User"
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Menu = ({ user }: { user: User | null } ) => {
	const navigate = useNavigate()

	const logout = () => {
		Cookies.remove(import.meta.env.VITE_ACCESS_TOKEN);
		navigate('/login')
	}

	return (
		<ul>
			<li><a href={`/user/${user?.name}`}>profile</a></li>
			<li><a href='/setting'>setting</a></li>
			<li onClick={logout}>logout</li>
		</ul>
	)
}

export default Menu
