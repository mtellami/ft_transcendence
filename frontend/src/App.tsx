import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Public, Private } from './components/components'
import {
	Login,
	Game,
	Chat,
	Setting,
	Profile,
	Home,
	NotFound
} from './pages/pages'

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
