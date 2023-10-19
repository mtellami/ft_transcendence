import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'
import { FaBell } from 'react-icons/fa6'
import useAuth from '../../hooks/useAuth'
import { User } from '../../interfaces/User'

function Navbar ({ user }: { user: User }) {
	const navigate = useNavigate()
	const { logout } = useAuth()
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

	const href = (event: React.MouseEvent<HTMLLIElement>, route: string) => {
		event.preventDefault()
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
				{/* Use PrimeReact Menu to creaet side menu */}
				<ul className={`menu ${isMenuOpen ? 'show' : ''}`}>
					<li onClick={(e) => href(e, `/user/${user.name}`)}>PROFILE</li>
					<li onClick={(e) => href(e, '/setting')}>SETTING</li>
					<li onClick={logout}>LOGOUT</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
