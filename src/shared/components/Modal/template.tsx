export function Modal() {
	return (
		<div className='absolute left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-gray-900/75'>
			<div className='flex h-[14.875rem] w-[27rem] flex-col items-center justify-center gap-6 rounded-lg bg-gray-800 p-16 text-center'>
				<strong className='text-2xl'>Excluir comentário</strong>
				<p>Você tem certeza que gostaria de excluir este comentário?</p>

				<div>
					<button className='bg-transparent h-12 w-[8.625rem] rounded-lg text-sm font-bold hover:bg-gray-700'>
						Cancelar
					</button>
					<button className='bg-transparent h-12 w-[8.625rem] rounded-lg text-sm font-bold hover:bg-gray-700 hover:text-red-900'>
						Sim, excluir
					</button>
				</div>
			</div>
		</div>
	)
}
