import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { IPostInfoProps } from '../../typings'
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import { usePost } from './script'
import { CustomLink } from './style'

interface IPostsProps {
	info: IPostInfoProps
}

export function Post({ info }: IPostsProps) {
	const {
		name,
		role,
		content,
		textarea,
		comments,
		avatarUrl,
		publicationDate,
		deleteComent,
		handleChangeTextarea,
		handleCreateNewComment,
		publicationDateFormatted,
		publicationDateDistanceToNow,
		isNewCommentEmpety
	} = usePost(info)

	return (
		<div className='flex w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-lg bg-gray-800 p-10'>
			<header className='flex w-full items-center'>
				<Avatar.border>
					<Avatar.root src={avatarUrl} />
				</Avatar.border>
				<div className='ml-4'>
					<p className='text-base font-bold text-white'>{name}</p>
					<span className='text-sm text-gray-400'>{role}</span>
				</div>
				<time
					title={publicationDateFormatted}
					className='flex-1 text-right text-sm text-gray-400 hidden md:block'
					dateTime={publicationDate.toISOString()}>
					{publicationDateDistanceToNow}
				</time>
			</header>

			<main className='text-base flex flex-col gap-6'>
				<Markdown
					remarkPlugins={[remarkGfm]}
					components={{
						//@ts-ignore
						a: CustomLink
					}}>
					{content}
				</Markdown>

				<time
					title={publicationDateFormatted}
					className='text-sm text-gray-400 md:hidden'
					dateTime={publicationDate.toISOString()}>
					{publicationDateDistanceToNow}
				</time>
			</main>

			<form className='w-full border-t border-gray-600 flex flex-col items-start pt-6 gap-4 last:*:focus-within:block'>
				<strong>Deixe seu feedback</strong>

				<textarea
					name='textarea'
					required
					value={textarea}
					onChange={handleChangeTextarea}
					placeholder='Escreva um comentário...'
					className='w-full h-24 rounded-lg bg-gray-900 resize-none py-3 px-4 focus:border focus:border-green outline-none hover:border hover:border-green text-gray-400 mt-4'
				/>

				<button
					type='submit'
					disabled={isNewCommentEmpety}
					onClick={handleCreateNewComment}
					className='hidden py-4 px-6 bg-green rounded-lg font-bold text-white hover:bg-green-light disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-green'>
					Publicar
				</button>
			</form>

			{comments.length > 0 ? (
				comments.map((comment) => (
					<Comment.root
						key={comment}
						text={comment}>
						<Comment.delete
							text={comment}
							onDeleteComment={deleteComent}
						/>
					</Comment.root>
				))
			) : (
				<></>
			)}
		</div>
	)
}
