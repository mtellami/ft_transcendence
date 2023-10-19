import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Game from './pages/Game/Game'
import Chat from './pages/Chat/Chat'
import Profile from './pages/Profile/Profile'
import Setting from './pages/Setting/Setting'
import Public from './components/Routes/Public'
import Private from './components/Routes/Private'

function App() {
	return (
		<Routes>
			<Route element={<Public />}>
				<Route path='login' element={<Login />}/>
			</Route>
			<Route element={<Private />}>
				<Route path='/' element={<Home />}/>
				<Route path='game' element={<Game />}/>
				<Route path='chat' element={<Chat />}/>
				<Route path='setting' element={<Setting />}/>
				<Route path='user/:username' element={<Profile />}/>
				<Route path='*' element={<NotFound />}/>
			</Route>
		</Routes>
	)
}

export default App
