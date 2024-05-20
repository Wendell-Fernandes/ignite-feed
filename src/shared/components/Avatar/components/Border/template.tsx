import type { IChildrenProp } from '../../../../typings'

export function Border({ children }: IChildrenProp) {
	return (
		<div className='flex items-center justify-center rounded-lg border-2 border-green bg-gray-800 p-[3px]'>
			{children}
		</div>
	)
}
