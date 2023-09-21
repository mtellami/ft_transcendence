import '../../styles/Layout.css'
import './Setting.css'
import Navbar from '../../components/Navbar/Navbar'
import { useEffect, useState } from 'react'
import { fetchUser } from '../../utils/fetchUser'
import Loading from '../../components/Loading/Loading'
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

function Setting () {
	const [user, setUser] = useState<any>(undefined)
	const [formData, setFormData] = useState({
		avatar: null,
		username: '',
		twoFactor: false,
		fullName: '',
		email: '',
		phoneNumber: 0
	})

	const updateChange = (e: any) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

	const removeAccount = (e: any) => {
		e.preventDefault()
		// send remove acount request
		// delete the access token
		// redirect to login
	}

	const saveChanges = async (e: any) => {
		e.preventDefault()
		const token = Cookies.get(`${import.meta.env.VITE_ACCESS_TOKEN}`)
		try {
			const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/setting`, {
				headers: {
					'Authorization': `Bearer ${token}`,
					'Content-Type': 'application/json'
				},
				method: 'PATCH',
				body: JSON.stringify(formData)
			})
			if (response.ok) {
				console.log('changes saved successfully')
			} else {
				console.log('fail to save changes')
			}
		} catch (error) {
			console.log('cant save changes')
		}
	}

	useEffect(() => {
		const getUser = async () => {
			const data = await fetchUser()
			setUser(data)
		}
		getUser()
	}, [])

	if (user === undefined) {
		return <Loading />
	} else if (user) {
		return (
			<div className='layout'>
				<Navbar user={user} />
				<form onSubmit={saveChanges} className='s-content'>
					<h1>Account Setting</h1>
					<div className='section-1'>
						<div className='s-avatar'>
							<label htmlFor='avatar'>Avatar:</label>
							<input onChange={updateChange} name='avatar' className='upload' type='file' />
						</div>
						<div className='s-username'>
							<label htmlFor='username'>Username:</label>
							<input onChange={updateChange} name='username' type='text' />
						</div>
						<div className='s-authentication'>
							<input onChange={updateChange} name='twoFactor' type='checkbox' />
							<label htmlFor='twoFactor'>Two-Factor authentication</label>
							<p>Goole authenticator or sending a text message to your phone</p>
						</div>
						<div className='s-remove-account'>
							<label>Danger zone</label>
							<button onClick={removeAccount}>Remove Account</button>
						</div>
					</div>
					<div className='section-2'>
						<div className='full-name'>
							<label htmlFor='fullName'>Full name:</label>
							<input onChange={updateChange} name='fullName' type='text' />
						</div>
						<div className='email'>
							<label htmlFor='email'>Email:</label>
							<input onChange={updateChange} name='email' type='email' />
						</div>
						<div className='phone'>
							<label htmlFor='phoneNumber'>Phone number:</label>
							<input onChange={updateChange} name='phoneNumber' type='tel' />
						</div>
						<div className='confirm'>
							<button>Cancel</button>
							<button type='submit'>Save</button>
						</div>
					</div>
				</form>
			</div>
		)
	} else {
		return <Navigate to="/login" />
	}
	
}

export default Setting
