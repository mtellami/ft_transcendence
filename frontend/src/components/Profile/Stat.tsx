import './Stat.css'
import { FaShield, FaMessage, FaEllipsisVertical, FaCertificate, FaCircleCheck, FaX } from 'react-icons/fa6'

function Stat () {
	return (
		<div className='stat'>
			<div className='info'>
				<h1>Profile</h1>
				<div className='container-1'>
					<div className='s-section-1'>
						<div className='rank'>
							<FaCertificate style={{ color: 'orange', fontSize: '4rem', marginLeft: '30px' }} /> <div>
								<h1>BRONZE</h1>
								<h3>70 / 1200</h3>
								<p>[\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ .................................]</p>
							</div>
						</div>
						<div className='win'>
							<FaCircleCheck style={{ color: 'green', fontSize: '2.5rem' }} />
							<h3>85</h3>
							<p>TOTAL WINS</p>
						</div>
						<div className='lose'>
							<FaX style={{ color: 'red', fontSize: '2.5rem' }}/>
							<h3>42</h3>
							<p>TOTAL LOSES</p>
						</div>
					</div>
					<div className='option'>
						<div className='wraper'>
							<button>ADD FRIEND</button>
							<button><FaMessage /></button>
							<button><FaEllipsisVertical /></button>
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
