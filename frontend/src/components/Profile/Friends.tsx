import './Friends.css'
import { FaMeteor } from 'react-icons/fa6'

function Friends ({ profile }: any) {
	return (
		<div className='friends'>
			<h1>Friend</h1>
			<ul className='gallery'>
				<li className='friend-card'>
					<img src={profile.avatar} />
					<h3>{profile.username}</h3>
					<div>
						<FaMeteor style={{ color: 'orange', marginLeft: '30px' }} />
						<span>BRONZE</span>
					</div>
					<button>ADD FRIEND</button>
				</li>
				<li className='friend-card'>
					<img src={profile.avatar} />
					<h3>{profile.username}</h3>
					<div>
						<FaMeteor style={{ color: 'orange', marginLeft: '30px' }} />
						<span>BRONZE</span>
					</div>
					<button>ADD FRIEND</button>
				</li>
				<li className='friend-card'>
					<img src={profile.avatar} />
					<h3>{profile.username}</h3>
					<div>
						<FaMeteor style={{ color: 'orange', marginLeft: '30px' }} />
						<span>BRONZE</span>
					</div>
					<button>ADD FRIEND</button>
				</li>
				<li className='friend-card'>
					<img src={profile.avatar} />
					<h3>{profile.username}</h3>
					<div>
						<FaMeteor style={{ color: 'orange', marginLeft: '30px' }} />
						<span>BRONZE</span>
					</div>
					<button>ADD FRIEND</button>
				</li>
				<li className='friend-card'>
					<img src={profile.avatar} />
					<h3>{profile.username}</h3>
					<div>
						<FaMeteor style={{ color: 'orange', marginLeft: '30px' }} />
						<span>BRONZE</span>
					</div>
					<button>ADD FRIEND</button>
				</li>
				<li className='friend-card'>
					<img src={profile.avatar} />
					<h3>{profile.username}</h3>
					<div>
						<FaMeteor style={{ color: 'orange', marginLeft: '30px' }} />
						<span>BRONZE</span>
					</div>
					<button>ADD FRIEND</button>
				</li>
				<li className='friend-card'>
					<img src={profile.avatar} />
					<h3>{profile.username}</h3>
					<div>
						<FaMeteor style={{ color: 'orange', marginLeft: '30px' }} />
						<span>BRONZE</span>
					</div>
					<button>ADD FRIEND</button>
				</li>
				<li className='friend-card'>
					<img src={profile.avatar} />
					<h3>{profile.username}</h3>
					<div>
						<FaMeteor style={{ color: 'orange', marginLeft: '30px' }} />
						<span>BRONZE</span>
					</div>
					<button>ADD FRIEND</button>
				</li>
				<li className='friend-card'>
					<img src={profile.avatar} />
					<h3>{profile.username}</h3>
					<div>
						<FaMeteor style={{ color: 'orange', marginLeft: '30px' }} />
						<span>BRONZE</span>
					</div>
					<button>ADD FRIEND</button>
				</li>
				<li className='friend-card'>
					<img src={profile.avatar} />
					<h3>{profile.username}</h3>
					<div>
						<FaMeteor style={{ color: 'orange', marginLeft: '30px' }} />
						<span>BRONZE</span>
					</div>
					<button>ADD FRIEND</button>
				</li>
			</ul>
		</div>
	)
}

export default Friends
