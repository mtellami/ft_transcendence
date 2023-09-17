import Navbar from '../../components/Navbar/Navbar'
import './Home.css'

function Home({ user }: any) {
	return (
		<div className='layout container'>
			<Navbar user={user} />
			<h1>....</h1>
		</div>
	)
}

export default Home
