import Sidebar from '../components/Sidebar'
import SinglePost from '../components/SinglePost'

export default function Single() {
	return (
		<div className='flex'>
			<SinglePost />
			<Sidebar />
		</div>
	)
}
