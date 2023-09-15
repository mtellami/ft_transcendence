import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Auth from './pages/Auth/Auth'
import Game from './pages/Game/Game'
import Chat from './pages/Chat/Chat'
import Profile from './pages/Profile/Profile'
import Leaderboard from './pages/Leaderboard/Leaderboard'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home/>}></Route>
			<Route path='login' element={<Login/>}></Route>
			<Route path='auth' element={<Auth/>}></Route>
			<Route path='game' element={<Game/>}></Route>
			<Route path='chat' element={<Chat/>}></Route>
			<Route path='user/:username' element={<Profile/>}></Route>
			<Route path='leaderboard' element={<Leaderboard/>}></Route>
			<Route path='*' element={ <NotFound /> }></Route>
		</Routes>
	)
}

export default App
