import type { ReactNode } from 'react'

export interface IChildrenProp {
	children: ReactNode
}

export interface IChildrenNotNecessary {
	children?: ReactNode
}

export interface IPostInfoProps {
	id: number
	author: {
		name: string
		role: string
		avatarUrl: string
	}
	content: string
	publicationDate: Date
}
