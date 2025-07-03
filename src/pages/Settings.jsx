import Sidebar from '../components/Sidebar'

export default function Settings() {
	return (
		<div className='flex dark:bg-[#1e1e1e] duration-300 ease-in-out'>
			<div className='flex-[9] p-5'>
				<div className='flex items-center justify-between'>
					<span className='text-[30px] mb-5 text-red-400'>
						Update Your Profile
					</span>
					<span className='text-red-600 text-xs cursor-pointer hover:text-red-800 dark:hover:text-red-300'>
						Delete Account
					</span>
				</div>

				<form className='flex flex-col'>
					<label className='dark:text-white duration-300 ease-in-out'>Profile Picture</label>
					<div className='flex items-center mt-2.5 mb-10 cursor-pointer'>
						<img
							className='w-16 h-16 rounded-full object-cover mr-2.5 border-2 dark:border-white duration-300 ease-in-out'
							src='../../images/photo.jpg'
						/>
					</div>

					<label className='dark:text-white duration-300 ease-in-out'>Username</label>
					<input
						type='text'
						placeholder='Username'
						className='mb-2.5 p-2.5 rounded-lg border border-gray-300 placeholder-gray-500 dark:text-white dark:placeholder-gray-400 duration-300 ease-in-out'
					/>
					<label className='dark:text-white duration-300 ease-in-out'>Email</label>
					<input
						type='email'
						placeholder='example@gmail.com'
						className='mb-2.5 p-2.5 rounded-lg border border-gray-300 placeholder-gray-500 dark:text-white dark:placeholder-gray-400 duration-300 ease-in-out'
					/>
					<label className='dark:text-white duration-300 ease-in-out'>Password</label>
					<input
						type='password'
						placeholder='Password'
						className='mb-2.5 p-2.5 rounded-lg border border-gray-300 placeholder-gray-500 dark:text-white dark:placeholder-gray-400 duration-300 ease-in-out'
					/>
					<button className='mt-5 bg-teal-600 text-white font-semibold px-6 py-2 rounded-lg cursor-pointer self-end'>
						Update
					</button>
				</form>
			</div>
			<Sidebar />
		</div>
	)
}
