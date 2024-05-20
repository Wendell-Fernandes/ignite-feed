import { useState } from 'react'

export function useRoot() {
	const [likeCount, setLikeCount] = useState(0)

	function handleAddLikeComment() {
		setLikeCount((state) => state + 1)
	}

	return { likeCount, handleAddLikeComment }
}
