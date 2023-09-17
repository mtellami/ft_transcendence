import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import Cookies from 'js-cookie'
import { useState } from 'react'

function Navbar ({ user }: any) {
	const navigate = useNavigate()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const logout = (e: any) => {
		Cookies.remove(import.meta.env.VITE_TOKEN_COOKIE);
		e.preventDefault()
		navigate('/login')
	}

	const href = (e: any, route: string) => {
		e.preventDefault()
		navigate(route)
	}

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<div className='navbar'>
			<h3>PonGame</h3>
			<ul>
				<li onClick={(e) => href(e, '/')}>HOME</li>
				<li onClick={(e) => href(e, '/game')}>GAME</li>
				<li onClick={(e) => href(e, '/chat')}>CHAT</li>
			</ul>
			<div className='burger'>
				<img onClick={toggleMenu} src={`${user.avatar}`} alt='avatar' />
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
