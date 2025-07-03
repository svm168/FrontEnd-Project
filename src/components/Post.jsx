import { NavLink } from 'react-router-dom'

export default function Post({ img }) {
	return (
		<div className='w-[385px] m-0 mx-6 mb-10 flex flex-col'>
			<img
				className='w-[385px] h-[280px] object-cover rounded-lg border-2 dark:border-white duration-300 ease-in-out'
				src={img}
			/>

			<div className='flex flex-col items-center'>
				<div className='flex'>
					<span className='text-xs text-orange-300 mt-4 mr-2.5 cursor-pointer'>
						<NavLink
							className='text-orange-300 hover:underline hover:text-orange-400'
							to='/posts?cat=Sports'>
							Sports
						</NavLink>
					</span>
					<span className='font-sans font-normal text-xs text-orange-300 mt-4 mr-2.5 cursor-pointer'>
						<NavLink
							className='text-orange-300 hover:underline hover:text-orange-400'
							to='/posts?cat=LifeStyle'>
							LifeStyle
						</NavLink>
					</span>
				</div>

				<span className='text-2xl font-extrabold mt-4 cursor-pointer'>
					<NavLink to='/post/abc' className='hover:underline dark:text-white duration-300 ease-in-out'>
						Lorem ipsum dolor sit amet
					</NavLink>
				</span>
				<hr className='w-full my-2 dark:border-white duration-300 ease-in-out' />
				<span className='text-xs text-gray-500 dark:text-gray-200 duration-300 ease-in-out'>2 days ago</span>
			</div>
			<p className='mt-4 text-base leading-relaxed dark:text-white duration-300 ease-in-out'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Assumenda officia architecto deserunt deleniti? Labore ipsum
				aspernatur magnam fugiat, reprehenderit praesentium blanditiis
				quos cupiditate ratione atque, exercitationem quibusdam,
				reiciendis odio laboriosam?
			</p>
		</div>
	)
}
