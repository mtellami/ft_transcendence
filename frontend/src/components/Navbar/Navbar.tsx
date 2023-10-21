import { useContext, useState } from 'react'
import { FaBell } from 'react-icons/fa6'
import { UserContext } from '../../context/UserContext'
import './Navbar.css'
import { Menu } from '../components'

function Navbar () {
	const { user } = useContext(UserContext)
	const [open, setOpen] = useState<boolean>(false)

	return (
		<div className='navbar'>
			<h3>PonGame</h3>
			<ul>
				<li><a href='/'>home</a></li>
				<li><a href='/game'>game</a></li>
				<li><a href='/chat'>chat</a></li>
			</ul>
			<FaBell className='icon' />
			<div className='burger'>
				<img onClick={() => setOpen(!open)} src={user?.avatar} alt='avatar' />
				{open && <Menu user={user} />}
			</div>
		</div>
	)
}

export default Navbar
