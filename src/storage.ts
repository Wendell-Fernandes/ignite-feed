import type { IPostInfoProps } from './shared/typings'

export const posts: IPostInfoProps[] = [
	{
		id: 1,
		author: {
			name: 'Wendell Fernandes da Luz',
			role: 'Web developer',
			avatarUrl: 'https://github.com/Wendell-Fernandes.png'
		},
		content:
			'Fala galera\n\nAcabei de subir mais um projeto no meu github. É um projeto que fiz no curso da Rocketseat. O nome do projeto é Ignite Feed.\n\n[github/Wendell-Fernandes](https://github.com/Wendell-Fernandes)\n\n[#ignite-feed](https://github.com/Wendell-Fernandes/ignite-feed) [#rocketseat](https://www.rocketseat.com.br/formacao/fullstack)',
		publicationDate: new Date('2024-05-20 16:00:00')
	}
]
