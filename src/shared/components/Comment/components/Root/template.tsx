import { ThumbsUp } from '@phosphor-icons/react'
import { IChildrenNotNecessary } from '../../../../typings'
import { Avatar } from '../../../Avatar'

export function Root({ children }: IChildrenNotNecessary) {
	return (
		<div className='flex gap-4 w-full pt-2'>
			<Avatar.root />
			<div className='flex grow flex-col gap-4'>
				<div className='h-32 bg-gray-700 rounded-lg px-4 pt-4 pb-6 flex flex-col'>
					<div className='flex justify-between'>
						<strong className='text-sm'>Usuário</strong>
						{children}
					</div>
					<span className='text-xs'>Cerca de 3h</span>
					<p className='grow text-sm flex items-end'>Um comentário qualquer...</p>
				</div>
				<button className='flex gap-2 text-gray-400 font-bold hover:text-white'>
					<ThumbsUp size={20} />
					Aplaudir • 03
				</button>
			</div>
		</div>
	)
}
