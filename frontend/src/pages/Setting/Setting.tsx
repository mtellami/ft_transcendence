import '../../styles/Layout.css'
import './Setting.css'
import Navbar from '../../components/Navbar/Navbar'
import { useEffect, useState } from 'react'
import { fetchUser } from '../../utils/fetchUser'
import Loading from '../../components/Loading/Loading'
import { Navigate, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { FaRegTrashCan, FaPen } from 'react-icons/fa6'

function Setting () {
	const navigate = useNavigate()
	const [user, setUser] = useState<any>(undefined)
	const [formData, setFormData] = useState({
		avatar: null,
		username: '',
		twoFactor: null,
		fullName: '',
		email: '',
		phoneNumber: ''
	})

	const updateChange = (e: any) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      setFormData({ ...formData, [name]: e.target.files[0] });
			upadtePreview(e)
		} else if (type == 'checkbox') {
			setFormData({ ...formData, [name]: e.target.checked })
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

	const removeAccount = async (e: any) => {
		e.preventDefault()
		const token = Cookies.get(`${import.meta.env.VITE_ACCESS_TOKEN}`)
		try {
			const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user`, {
				headers: {
					'Authorization': `Bearer ${token}`,
				},
				method: 'DELETE',
			})
			if (response.ok) {
				Cookies.remove(`${import.meta.env.VITE_ACCESS_TOKEN}`)
				navigate('/login')
			}
		} catch (error) {
			console.log(error)
		}
	}

	const getFormData = (data: any) => {
		const form = new FormData()
		if (data.avatar !== null) {
			 form.append('avatar', data.avatar, 'avatar')
		}
		if (data.username !== '') {
			form.append('username', data.username)
		}
		if (data.twoFactor !== null) {
			form.append('twoFactor', data.twoFactor)
		}
		if (data.fullName !== '') {
			form.append('fullName', data.fullName)
		}
		if (data.email !== '') {
			form.append('email', data.email)
		}
		if (data.phoneNumer !== null) {
			form.append('phoneNumber', data.phoneNumber)
		}
		return form
	}

	const saveChanges = async (e: any) => {
		e.preventDefault()
		const token = Cookies.get(`${import.meta.env.VITE_ACCESS_TOKEN}`)
		const form = getFormData(formData)
		try {
			const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user`, {
				headers: {
					'Authorization': `Bearer ${token}`,
				},
				method: 'PATCH',
				body: form
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
	
	const cancelChanges = () => {
		setFormData({
			avatar: null,
			username: '',
			twoFactor: null,
			fullName: '',
			email: '',
			phoneNumber: ''
		})
	}

	const upadtePreview = (e: any) => {
		if (e.target.files[0]) {
			const reader = new FileReader()
			reader.onload = (e:any) => {
				const upload = document.querySelector('#img')
				upload?.setAttribute('src', e.target.result)
			}
			reader.readAsDataURL(e.target.files[0])
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
				<form onSubmit={saveChanges} className='s-content' autoComplete='off'>
					<h1>Account Setting</h1>
					<div className='section-1'>
						<div className='s-avatar'>
							<label htmlFor='avatar'>Avatar:</label>
							<input onChange={updateChange} name='avatar' id='avatar' type='file' accept='image/*' />
							<div className='upload' onClick={() => {document.getElementById('avatar')?.click()}}>
								<FaPen style={{ position: 'absolute', top: '10%', right: '-40%', zIndex: '99', fontSize: '2rem', border: '1px solid white', padding: '5px', borderRadius: '50%'}} />
								<img id='img' src='https://fakeimg.pl/400x400/000000/000000' />
							</div>
						</div>
						<div className='s-username'>
							<label htmlFor='username'>Username:</label>
							<input onChange={updateChange} name='username' type='text' placeholder='Enter a unique username' />
						</div>
						<div className='s-authentication'>
							<input className='checkbox' onChange={updateChange} name='twoFactor' type='checkbox' />
							<div>
								<label htmlFor='twoFactor'>Two-Factor authentication</label>
								<p>Goole authenticator or sending a text message to your phone</p>
							</div>
						</div>
						<div className='s-remove-account'>
							<label>Danger zone</label>
							<button className='remove-account' type='button' onClick={removeAccount}><FaRegTrashCan style={{ marginRight: '15px' }} />Remove Account</button>
						</div>
					</div>
					<div className='section-2'>
						<div className='full-name'>
							<label htmlFor='fullName'>Full name:</label>
							<input onChange={updateChange} name='fullName' type='text' placeholder='Enter your full name' />
						</div>
						<div className='email'>
							<label htmlFor='email'>Email:</label>
							<input onChange={updateChange} name='email' type='email' placeholder='Enter your email' />
						</div>
						<div className='phone'>
							<label htmlFor='phoneNumber'>Phone number:</label>
							<input onChange={updateChange} name='phoneNumber' type='tel' placeholder='Enter your phone number'/>
						</div>
						<div className='confirm'>
							<button className='save' type='submit'>Save changes</button>
							<button className='cancel' type='button' onClick={cancelChanges}>Cancel</button>
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
