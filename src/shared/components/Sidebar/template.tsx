import { PencilSimpleLine } from '@phosphor-icons/react'
import { Avatar } from '../Avatar'

export function Sidebar() {
	return (
		<aside className='flex h-[18.3rem] flex-col items-center overflow-hidden rounded-lg'>
			<img
				src='https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				alt=''
				className='h-[4.5rem] w-full object-cover'
			/>

			<div className='flex h-full w-full flex-col items-center justify-center bg-gray-800'>
				<div className='mb-4 -translate-y-[1.875rem]'>
					<Avatar.border>
						<Avatar.root src='https://github.com/Wendell-Fernandes.png' />
					</Avatar.border>
				</div>

				<div className='flex -translate-y-[1.875rem] flex-col items-center justify-center'>
					<strong className='text-[1.2rem] leading-[1.6rem] text-gray-100'>Wendell Fernandes</strong>
					<span className='text-[0.875rem] leading-[1.6rem] text-gray-400'>Web developer</span>
				</div>

				<footer className='mt-6 w-full -translate-y-[1.875rem] border-t border-gray-600 px-8 py-6'>
					<a
						href='./'
						className='mb-4 flex h-[3.125rem] items-center justify-center gap-2 rounded-lg border border-green px-6 font-bold
					text-green no-underline transition-colors delay-100 hover:bg-green hover:text-white'>
						<PencilSimpleLine size={20} />
						Editar seu perfil
					</a>
				</footer>
			</div>
		</aside>
	)
}
