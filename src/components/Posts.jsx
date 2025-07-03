import Post from './Post'

export default function Posts() {
	return (
		<div className='flex flex-wrap flex-[9] p-5'>
			<Post img='../../images/blog_1.jpg' />
			<Post img='../../images/blog_2.jpg' />
			<Post img='../../images/blog_3.jpg' />
			<Post img='../../images/blog_4.jpg' />
		</div>
	)
}
