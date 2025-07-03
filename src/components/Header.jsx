import { NavLink } from 'react-router-dom'

export default function Header() {
	return (
		<div className='pt-4 dark:bg-[#1e1e1e] duration-300 ease-in-out'>
			<div className='flex items-center justify-center text-[#1e1e1e] dark:text-white duration-300 ease-in-out'>
				<span className='text-[90px]'>
					<NavLink to='/'>BLOGFEST</NavLink>
				</span>
			</div>
			<div className='flex justify-center rounded-lg pb-6'>
				<img
					className='w-[60%] h-[450px] border-2 rounded-[50px] dark:border-white duration-300 ease-in-out'
					src='../../images/blog_header_img.jpg'
				/>
			</div>
		</div>
	)
}
