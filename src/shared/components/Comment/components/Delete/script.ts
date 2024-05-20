export function useDelete(onDeleteComment: (text: string) => void, text: string) {
	function handleDeleteComment() {
		onDeleteComment(text)
	}

	return { handleDeleteComment }
}
