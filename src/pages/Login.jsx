import { NavLink } from 'react-router-dom'

export default function Login() {
	return (
		<div className='h-[calc(100vh-60px)] flex flex-col items-center justify-center bg-[url(../../images/login_bg.jpg)] bg-cover bg-no-repeat'>
			<span className='text-[50px] text-white font-bold'>Login</span>
			<form className='mt-5 flex flex-col'>
				<label className='my-2.5 text-teal-600 font-semibold'>
					Email
				</label>
				<input
					className='p-2.5 bg-white border-none rounded-lg focus:outline-none'
					type='text'
					placeholder='Enter your E-mail...'
				/>
				<label className='my-2.5 text-teal-600 font-semibold'>
					Password
				</label>
				<input
					className='p-2.5 bg-white border-none rounded-lg focus:outline-none'
					type='password'
					placeholder='Enter your Password...'
				/>
				<button className='mt-14 bg-teal-600 text-white font-semibold px-6 py-2 rounded-lg cursor-pointer'>
					Login
				</button>
			</form>
			<button className='mt-5 bg-pink-500 text-white font-semibold px-6 py-2 rounded-lg cursor-pointer'>
				<NavLink to='/register'>SIGN UP</NavLink>
			</button>
		</div>
	)
}
