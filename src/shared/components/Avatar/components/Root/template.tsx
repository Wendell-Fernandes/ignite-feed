import { User } from '@phosphor-icons/react'

interface IRootProps {
	src?: string
}

export function Root({ src }: IRootProps) {
	return (
		<>
			{src && (
				<img
					src={src}
					className='size-[3.125rem] rounded-md border-0'
				/>
			)}
			{!src && (
				<div className='size-[3.125rem] bg-gray-700 flex justify-center items-center rounded-lg'>
					<User />
				</div>
			)}
		</>
	)
}
