import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { FaBell } from 'react-icons/fa6'

function Navbar ({ user }: any) {
	const navigate = useNavigate()
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

	const logout = (e: any) => {
		Cookies.remove(import.meta.env.VITE_ACCESS_TOKEN);
		e.preventDefault()
		navigate('/login')
	}

	const href = (e: any, route: string) => {
		e.preventDefault()
		navigate(route)
	}

	return (
		<div className='navbar'>
			<h3>PonGame</h3>
			<ul>
				<li onClick={(e) => href(e, '/')}>HOME</li>
				<li onClick={(e) => href(e, '/game')}>GAME</li>
				<li onClick={(e) => href(e, '/chat')}>CHAT</li>
			</ul>
			<FaBell className='icon' />
			<div className='burger'>
				<img onClick={() => setIsMenuOpen(!isMenuOpen)} src={`${user.avatar}`} alt='avatar' />
				<ul className={`menu ${isMenuOpen ? 'show' : ''}`}>
					<li onClick={(e) => href(e, `/user/${user.username}`)}>PROFILE</li>
					<li onClick={(e) => href(e, '/setting')}>SETTING</li>
					<li onClick={logout}>LOGOUT</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
