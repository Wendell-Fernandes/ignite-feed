import { ThumbsUp } from '@phosphor-icons/react'
import type { ReactNode } from 'react'
import { Avatar } from '../../../Avatar'
import { useRoot } from './script'

interface IRootProps {
	children?: ReactNode
	text: string
}

export function Root({ children, text }: IRootProps) {
	const { likeCount, handleAddLikeComment } = useRoot()
	return (
		<div className='flex gap-4 w-full pt-2'>
			<Avatar.root />
			<div className='flex grow flex-col gap-4'>
				<div className='h-32 bg-gray-700 rounded-lg px-4 pt-4 pb-6 flex flex-col'>
					<div className='flex justify-between'>
						<strong className='text-sm'>Wendell Fernandes da Luz</strong>
						{children}
					</div>
					<span className='text-xs'>Cerca de 3h</span>
					<p className='grow text-sm flex items-end'>{text}</p>
				</div>
				<button
					type='button'
					onClick={handleAddLikeComment}
					className='flex gap-2 text-gray-400 font-bold hover:text-white'>
					<ThumbsUp size={20} />
					Aplaudir • {likeCount}
				</button>
			</div>
		</div>
	)
}
