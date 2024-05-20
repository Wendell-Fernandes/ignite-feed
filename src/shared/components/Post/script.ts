import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { type ChangeEvent, type FormEvent, useState } from 'react'
import type { IPostInfoProps } from '../../typings'

export function usePost(info: IPostInfoProps) {
	const { author, content, publicationDate } = info
	const { avatarUrl, name, role } = author

	const [textarea, setTextarea] = useState('')
	const [comments, setComments] = useState<string[]>([])

	function handleChangeTextarea(event: ChangeEvent<HTMLTextAreaElement>) {
		//@ts-ignore
		setTextarea(event.target.value)
	}

	function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
		event?.preventDefault()
		setComments([...comments, textarea])
		setTextarea('')
	}

	function deleteComent(text: string) {
		const commentsWithoutOne = comments.filter((e) => e !== text)

		setComments(commentsWithoutOne)
	}

	const publicationDateFormatted = format(publicationDate, "d 'de' LLLL 'às' HH:mm'h'", {
		locale: ptBR
	})

	const publicationDateDistanceToNow = formatDistanceToNow(publicationDate, {
		locale: ptBR,
		addSuffix: true
	})

	const isNewCommentEmpety = textarea.length === 0

	return {
		name,
		role,
		content,
		textarea,
		comments,
		avatarUrl,
		deleteComent,
		publicationDate,
		handleChangeTextarea,
		handleCreateNewComment,
		publicationDateFormatted,
		publicationDateDistanceToNow,
		isNewCommentEmpety
	}
}
