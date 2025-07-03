import { NavLink } from 'react-router-dom'

export default function Sidebar() {
	return (
		<div className='flex flex-col flex-[3] m-5 pb-8 bg-[#f1f2f7] h-fit items-center rounded-xl dark:bg-[#656568] duration-300 ease-in-out'>
			<div className='flex flex-col items-center'>
				<span className='my-2 py-1 w-4/5 border-t border-b border-[#535353] text-center text-[14px] text-[#222] font-semibold dark:border-white dark:text-white duration-300 ease-in-out'>
					ABOUT ME
				</span>
				<img
					className='mt-4 w-[250px] h-[250px]'
					src='../../images/photo.jpg'
					alt=''
				/>
				<p className='p-8 text-center dark:text-white duration-300 ease-in-out'>
					Greetings! I am Shivam Kumar Jha, 2y from ECE. I aspire to
					become a SDE. <br />
					Enrollment No.: 24113117 <br /> <br />
					Submitting this as a project in Thomso. <br /> Wish me luck!
				</p>
			</div>

			<div className='flex flex-col items-center'>
				<span className='my-2.5 py-1 w-30 border-t border-b border-[#535353] text-center text-[12px] text-[#222] font-semibold dark:border-white dark:text-white duration-300 ease-in-out'>
					CATEGORIES
				</span>
				<ul className='flex flex-col w-full items-center gap-y-1 text-blue-600 dark:text-blue-200 duration-300 ease-in-out'>
					<li>
						<a
							className='hover:underline hover:text-blue-900 dark:hover:text-blue-400'
							href='https://github.com/svm168'
							target='blank'>
							My GitHub Profile
						</a>
					</li>
					<li>
						<a
							className='hover:underline hover:text-blue-900 dark:hover:text-blue-400'
							href='mailto:shivam_kj@ece.iitr.ac.in'
							target='blank'>
							Send me an E-mail
						</a>
					</li>
					<li>
						<NavLink
							className='hover:underline hover:text-blue-900 dark:hover:text-blue-400'
							to='/posts?cat=Sport'>
							Sports
						</NavLink>
					</li>
					<li>
						<NavLink
							className='hover:underline hover:text-blue-900 dark:hover:text-blue-400'
							to='/posts?cat=LifeStyle'>
							LifeStyle
						</NavLink>
					</li>
					<li>
						<NavLink
							className='hover:underline hover:text-blue-900 dark:hover:text-blue-400'
							to='/posts?cat=Music'>
							Music
						</NavLink>
					</li>
					<li>
						<NavLink
							className='hover:underline hover:text-blue-900 dark:hover:text-blue-400'
							to='/posts?cat=Tech'>
							Tech
						</NavLink>
					</li>
				</ul>
			</div>

			<div className='flex flex-col items-center mt-3'>
				<span className='my-2.5 py-1 w-30 border-t border-b border-[#535353] text-center text-[12px] text-[#222] font-semibold dark:border-white dark:text-white duration-300 ease-in-out'>
					FOLLOW ME
				</span>
			</div>
		</div>
	)
}
