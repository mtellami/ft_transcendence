import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Auth from './pages/Auth/Auth'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home/>}></Route>
			<Route path='login' element={<Login/>}></Route>
			<Route path='auth' element={<Auth/>}></Route>
			<Route path='*' element={ <NotFound /> }></Route>
		</Routes>
	)
}

export default App
