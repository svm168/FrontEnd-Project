import { NavLink } from 'react-router-dom'

export default function Register() {
	return (
		<div className='h-[calc(100vh-60px)] flex flex-col items-center justify-center bg-[url(../../images/register_bg.jpg)] bg-cover'>
			<span className='text-[50px] font-semibold'>Register</span>
			<form className='mt-5 flex flex-col'>
				<label className='my-2.5 font-semibold'>Username</label>
				<input
					className='p-2.5 bg-white border-none rounded-lg focus:outline-none'
					type='text'
					placeholder='Enter your Username...'
				/>
				<label className='my-2.5 font-semibold'>Email</label>
				<input
					className='p-2.5 bg-white border-none rounded-lg focus:outline-none'
					type='text'
					placeholder='Enter your E-mail...'
				/>
				<label className='my-2.5 font-semibold'>Password</label>
				<input
					className='p-2.5 bg-white border-none rounded-lg focus:outline-none'
					type='password'
					placeholder='Enter your Password...'
				/>
				<button className='mt-5 bg-teal-600 text-white px-6 py-2 rounded-lg cursor-pointer font-semibold'>
					Register
				</button>
			</form>
			<button className='mt-5 bg-pink-500 text-white px-6 py-2 rounded-lg cursor-pointer font-semibold'>
				<NavLink to='/login'>LOGIN</NavLink>
			</button>
		</div>
	)
}
