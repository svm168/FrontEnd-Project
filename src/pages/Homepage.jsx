import Header from '../components/Header'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'

export default function Homepage() {
	return (
		<>
			<Header />
			<div className='flex dark:bg-[#1e1e1e] transition-colors duration-1000 ease-in-out'>
				<Posts />
				<Sidebar />
			</div>
		</>
	)
}
