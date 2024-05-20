import { Header } from './shared/components/Header/template'
import { Post } from './shared/components/Post/template'
import { Sidebar } from './shared/components/Sidebar/template'
import { Default } from './shared/layouts/Default/template'
import { posts } from './storage'

export function App() {
	return (
		<Default>
			<Header />
			<div className='pb-36 mx-auto mt-8 grid max-w-6xl md:grid-cols-timeline grid-cols-[1fr] gap-8 px-4 items-start '>
				<Sidebar />
				<main className='flex flex-col gap-9 only:'>
					{posts.map((post) => (
						<Post
							info={post}
							key={post.id}
						/>
					))}
				</main>
			</div>
		</Default>
	)
}
