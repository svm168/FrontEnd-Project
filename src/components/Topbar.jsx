import { NavLink } from 'react-router-dom'

export default function Topbar() {
	return (
		<div className='w-full h-[60px] sticky top-0 flex items-center z-[1000] bg-white dark:bg-[#111] text-black dark:text-white duration-300 ease-in-out'>
			<div className='flex-[6]'>
				<ul className='flex justify-center m-0 p-0 list-none'>
					<li className='mx-2.5 cursor-pointer'>
						<NavLink to='/'>HOME</NavLink>
					</li>
					<li className='mx-2.5 cursor-pointer'>
						<NavLink to='/write'>WRITE</NavLink>
					</li>
					<li className='mx-2.5 cursor-pointer'>LOGOUT</li>
				</ul>
			</div>

			<div className='flex-[3] flex items-center justify-center'>
				<NavLink to='/settings'>
					<img
						className='w-12 h-12 rounded-full object-cover border-2 border-blue-600 dark:border-white duration-300 ease-in-out'
						src='../../images/photo.jpg'
					/>
				</NavLink>
			</div>
		</div>
	)
}
