import { IChildrenNotNecessary } from '../../typings'
import { Avatar } from '../Avatar'

export function Post({ children }: IChildrenNotNecessary) {
	return (
		<div className='flex w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-lg bg-gray-800 p-10'>
			<header className='flex w-full items-center'>
				<Avatar.border>
					<Avatar.root src='https://github.com/Wendell-Fernandes.png' />
				</Avatar.border>
				<div className='ml-4'>
					<p className='text-base font-bold text-white'>Wendell Fernandes</p>
					<span className='text-sm text-gray-400'>Web developer</span>
				</div>
				<span className='flex-1 text-right text-sm text-gray-400 hidden md:block'>Públicado há 1h</span>
			</header>

			<main className='text-base flex flex-col gap-6'>
				<p>Fala galera</p>
				<p>
					Acabei de subir mais um projeto no meu github. É um projeto que fiz no curso da Rocketseat. O nome do projeto
					é Ignite Feed🚀
				</p>

				<strong className='text-green '>
					<a
						href='https://github.com/Wendell-Fernandes'
						target='_blank'
						className='hover:text-green-light'>
						github.com/Wendell-Fernandes
					</a>
				</strong>
				<strong className='text-green'>#novoprojeto #rocketseat</strong>

				<span className='text-sm text-gray-400 md:hidden'>Públicado há 1h</span>
			</main>

			<div className='w-full border-t border-gray-600 flex flex-col items-start pt-6 gap-4 last:*:focus-within:block'>
				<strong>Deixe seu feedback</strong>

				<textarea
					name='textarea'
					id=''
					placeholder='Escreva um comentário...'
					className='w-full h-24 rounded-lg bg-gray-900 resize-none py-3 px-4 focus:border focus:border-green outline-none hover:border hover:border-green text-gray-400 mt-4'
				/>

				<div className='hidden'>
					<button className=' py-4 px-6 bg-green rounded-lg font-bold text-white hover:bg-green-light'>Publicar</button>
				</div>
			</div>

			{children}
		</div>
	)
}
