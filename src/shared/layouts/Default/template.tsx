import { IChildrenProp } from '../../typings'

export function Default({ children }: IChildrenProp) {
	return (
		<div className='m-0 box-border w-screen h-screen scrollbar-none bg-gray-900 p-0 font-roboto text-base font-normal text-gray-300 overflow-scroll'>
			{children}
		</div>
	)
}
