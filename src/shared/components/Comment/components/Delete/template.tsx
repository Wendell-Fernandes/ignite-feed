import { Trash } from '@phosphor-icons/react'

export function Delete() {
	return (
		<button className='text-right hover:text-red'>
			<Trash className='text-2xl' />
		</button>
	)
}
