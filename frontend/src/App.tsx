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
import Setting from './pages/Setting/Setting'
import Guard from './components/Guard/Guard'

function App() {
	return (
		<Routes>
			<Route path='/' element={Guard(Home)}></Route>
			<Route path='login' Component={Login}></Route>
			<Route path='auth' Component={Auth}></Route>
			<Route path='game' element={Guard(Game)}></Route>
			<Route path='chat' element={Guard(Chat)}></Route>
			<Route path='setting' element={Guard(Setting)}></Route>
			<Route path='user/:username' element={Guard(Profile)}></Route>
			<Route path='leaderboard' element={Guard(Leaderboard)}></Route>
			<Route path='*' Component={NotFound}></Route>
		</Routes>
	)
}

export default App
