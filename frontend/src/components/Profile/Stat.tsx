import { useState } from 'react'
import './Stat.css'
import { FaShield,
	FaMessage,
	FaEllipsisVertical,
	FaMeteor,
	FaTableTennisPaddleBall
} from 'react-icons/fa6'

function Stat ({ profile, user }: any) {
	const [optionIsOpen, setOptionIsOpen] = useState(false)

	return (
		<div className='stat'>
			<div className='info'>
				<h1>Profile</h1>
				<div className='container-1'>
					<div className='s-section-1'>
						<div className='rank'>
							<FaMeteor style={{ color: 'orange', fontSize: '5rem', marginLeft: '30px' }} /> <div>
								<h1>BRONZE</h1>
								<h3>{profile.score} / 1200</h3>
								<div className='progress'><span style={{ width: profile.score + 100 }}></span></div>
							</div>
						</div>
						<div className='win'>
							<FaTableTennisPaddleBall style={{ color: 'green', fontSize: '3.5rem' }} />
							<div>
								<h2>{profile.wins}</h2>
								<p>TOTAL WINS</p>
							</div>
						</div>
						<div className='lose'>
							<FaTableTennisPaddleBall style={{ color: 'red', fontSize: '3.5rem' }}/>
							<div>
								<h2>{profile.games - profile.wins}</h2>
								<p>TOTAL LOSES</p>
							</div>
						</div>
					</div>
					<div className='option'>
						<div className='wraper'>
							<button>ADD FRIEND</button>
							<button><FaMessage /></button>
							<button className='s-option' onClick={() => setOptionIsOpen(!optionIsOpen)}>
								<FaEllipsisVertical />
							</button>
							<div className='block-button' style={{ display: optionIsOpen ? 'block' : 'none' }}>BLOCK</div>
						</div>
					</div>
				</div>
			</div>
			<div className='achiv'>
				<h1>Achievement</h1>
				<div className='container'>
					<div className='card'>
						<FaShield style={{ fontSize: '3rem', color: 'yellow', marginBottom: '20px' }} />
						<h4>BRONZE BADGE</h4>
						<p>Score over 500 points</p>
					</div>
					<div className='card'>
						<FaShield style={{ fontSize: '3rem', color: 'yellow', marginBottom: '20px' }} />
						<h4>KING OF TABLE</h4>
						<p>Win 3 matches in a row</p>
					</div>
					<div className='card'>
						<FaShield style={{ fontSize: '3rem', color: 'yellow', marginBottom: '20px' }} />
						<h4>THE BELOVED</h4>
						<p>Get 10 new friends</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Stat
