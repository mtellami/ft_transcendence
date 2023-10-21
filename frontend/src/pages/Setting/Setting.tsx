import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Loading } from '../../components/components'
import { removeUserAccount, updateUserAccount } from '../../utils/utils'
import { FaRegTrashCan, FaPen } from 'react-icons/fa6'
import './Setting.css'

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
		const response = await removeUserAccount()
		if (response) {
			navigate('/login')
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
		const form = getFormData(formData)
		const response = await updateUserAccount(form)
		if (response) {
			console.log('changes saved successfully')
		} else {
			console.log('fail to save changes')
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

	if (user === undefined) {
		return <Loading />
	} else if (user) {
		return (
			<div className='layout'>
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
