import './History.css'

function History ({ profile }: any) {
	return (
		<div className='history'>
			<h1>History</h1>
			<ul className='table'>
				<ul className='table-header'>
					<li>PLAYER</li>
					<li>RESULT</li>
					<li>SCORE</li>
					<li>DATE</li>
					<li></li>
				</ul>
				<hr />
				<ul className='match'>
					<li>JHON DOE</li>
					<li>5 - 3</li>
					<li>150</li>
					<li>16-09-2023</li>
					<li><span className='r-win'>WIN</span></li>
				</ul>
				<ul className='match'>
					<li>JHON DOE</li>
					<li>5 - 3</li>
					<li>150</li>
					<li>16-09-2023</li>
					<li><span className='r-lose'>LOSE</span></li>
				</ul>
				<ul className='match'>
					<li>JHON DOE</li>
					<li>5 - 3</li>
					<li>150</li>
					<li>16-09-2023</li>
					<li><span className='r-win'>WIN</span></li>
				</ul>
				<ul className='match'>
					<li>JHON DOE</li>
					<li>5 - 3</li>
					<li>150</li>
					<li>16-09-2023</li>
					<li><span className='r-lose'>LOSE</span></li>
				</ul>
				<ul className='match'>
					<li>JHON DOE</li>
					<li>5 - 3</li>
					<li>150</li>
					<li>16-09-2023</li>
					<li><span className='r-lose'>LOSE</span></li>
				</ul>
				<ul className='match'>
					<li>JHON DOE</li>
					<li>5 - 3</li>
					<li>150</li>
					<li>16-09-2023</li>
					<li><span className='r-win'>WIN</span></li>
				</ul>
				<ul className='match'>
					<li>JHON DOE</li>
					<li>5 - 3</li>
					<li>150</li>
					<li>16-09-2023</li>
					<li><span className='r-win'>WIN</span></li>
				</ul>
			</ul>
		</div>
	)
}

export default History
