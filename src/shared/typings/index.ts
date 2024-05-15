import { ReactNode } from 'react'

export interface IChildrenProp {
	children: ReactNode
}

export interface IChildrenNotNecessary {
	children?: ReactNode
}

export interface IPostsProps {
	id: number
	author: {
		name: string
		role: string
		avatar_url: string
	}
	content: string
	published_at: Date
}
