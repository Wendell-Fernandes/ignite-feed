import { Trash } from '@phosphor-icons/react'
import { useDelete } from './script'

interface IDeleteProp {
	onDeleteComment: (text: string) => void
	text: string
}

export function Delete({ text, onDeleteComment }: IDeleteProp) {
	const { handleDeleteComment } = useDelete(onDeleteComment, text)

	return (
		<button
			type='button'
			onClick={handleDeleteComment}
			className='text-right hover:text-red'>
			<Trash className='text-2xl' />
		</button>
	)
}
