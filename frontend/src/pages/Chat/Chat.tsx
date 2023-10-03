import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { fetchUser } from '../../utils/utils'
import { Loading, Navbar } from '../../components/components'
import { BsSearch, BsFillSendFill } from 'react-icons/bs'
import { GrMoreVertical } from "react-icons/gr";
import './Chat.css'

function Chat () {
	const [user, setUser] = useState<any>(undefined)
	const [focus, setFocus] = useState(0)

	useEffect(() => {
		const getUser = async () => {
			const data = await fetchUser()
			setUser(data)
		}
		getUser()
	}, [])

	const list = ['CHAT', 'CHANNEL']

	if (user === undefined) {
		return <Loading />
	} else if (user) {
		return (
			<div className="layout">
				<Navbar user={user} />
				<div className='chat'>
					<div className='channels'>
						<ul className='bar'>
							{list.map((item, index) => (
								<li key={index}
									className={focus === index ? 'selected' : ''}
									onClick={() => setFocus(index)}
								>
									{item}
								</li>
							))}
						</ul>
						<div className='search'>
							<input type='search' placeholder='search ...' />
							<BsSearch style={{ cursor: 'pointer'}} onClick={() => {document.querySelector('.search input')?.focus();}} />
						</div>
						<ul className='rooms-list'>
							<li>
								<img src={user.avatar} />
								<div>
									<h2>JHON DOE</h2>
									<p>Hello ..</p>
								</div>
							</li>
							<li>
								<img src={user.avatar} />
								<div>
									<h2>JHON DOE</h2>
									<p>Hello ..</p>
								</div>
							</li>
							<li>
								<img src={user.avatar} />
								<div>
									<h2>JHON DOE</h2>
									<p>Hello ..</p>
								</div>
							</li>
						</ul>
					</div>
					<div className='window'>
						<div className='chat-head'>
							<img src={user.avatar} />
							<h2>{user.username}</h2>
						</div>
						<div className='chat-body'></div>
						<div className='chat-input'>
							<input type='text' placeholder='send a message ..' />
							<BsFillSendFill style={{fontSize: '1.5rem', position: 'absolute', right: '20px', top: '30%', cursor: 'pointer'}} />
						</div>
					</div>
					<div className='friend-list'>
						<h2>FRIENDS</h2>
						<ul className='f-list'>
							<li>
								<img src={user.avatar} />
								<span></span>
								<h3>{user.username}</h3>
								<GrMoreVertical style={{ fontSize: '1.2rem' }} />
							</li>
							<li>
								<img src={user.avatar} />
								<span></span>
								<h3>{user.username}</h3>
								<GrMoreVertical style={{ fontSize: '1.2rem' }} />
							</li>
							<li>
								<img src={user.avatar} />
								<span></span>
								<h3>{user.username}</h3>
								<GrMoreVertical style={{ fontSize: '1.2rem' }} />
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	} else {
		return <Navigate to="/login" />
	}
	
}

export default Chat
