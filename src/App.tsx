import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Comment } from './shared/components/Comment'
import { Header } from './shared/components/Header/template'
import { Post } from './shared/components/Post/template'
import { Sidebar } from './shared/components/Sidebar/template'
import { Default } from './shared/layouts/Default/template'
import { IPostsProps } from './shared/typings'

//@ts-ignore
const CustomLink = ({ href, children }) => (
	<a
		href={href}
		className='text-green font-bold'
		target='_blank'>
		{children}
	</a>
)

export function App() {
	const posts: IPostsProps[] = [
		{
			id: 1,
			author: {
				name: 'Wendell Fernandes da Luz',
				role: 'Web developer',
				avatar_url: 'https://github.com/Wendell-Fernandes.png'
			},
			content:
				'Fala galera\n\nAcabei de subir mais um projeto no meu github. É um projeto que fiz no curso da Rocketseat. O nome do projeto é Ignite Feed\n\n[github/Wendell-Fernandes](https://github.com/Wendell-Fernandes)\n\n#novoprojeto #rocketseat',
			published_at: new Date('2024-05-15 16:00:00')
		}
	]

	return (
		<Default>
			<Header />
			<div className='pb-36 mx-auto mt-8 grid max-w-6xl md:grid-cols-timeline grid-cols-[1fr] items-start gap-8 px-4'>
				<Sidebar />
				<main className='flex flex-col gap-9 only:'>
					<Markdown
						remarkPlugins={[remarkGfm]}
						components={{
							//@ts-ignore
							a: CustomLink
						}}>
						{posts[0].content}
					</Markdown>
				</main>
			</div>
		</Default>
	)
}
