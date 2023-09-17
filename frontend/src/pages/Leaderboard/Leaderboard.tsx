import './Leaderboard.css'

function Leaderboard ({ user }: any) {
	return (
		<div className='layout'>
			<h1>Leaderboard list, where are you ${user.username}</h1>
		</div>
	)
}

export default Leaderboard

