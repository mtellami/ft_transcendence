import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Auth from './pages/Auth/Auth'
import Game from './pages/Game/Game'
import Chat from './pages/Chat/Chat'
import Profile from './pages/Profile/Profile'
import Setting from './pages/Setting/Setting'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home/>} />
			<Route path='auth/callback' element={<Auth/>} />
			<Route path='login' element={<Login/>} />
			<Route path='game' element={<Game/>} />
			<Route path='chat' element={<Chat/>} />
			<Route path='setting' element={<Setting />} />
			<Route path='user/:username' element={<Profile/>} />
			<Route path='*' element={<NotFound/>} />
		</Routes>
	)
}

export default App
