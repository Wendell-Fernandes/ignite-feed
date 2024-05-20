//@ts-ignore
export const CustomLink = ({ href, children }) => (
	<a
		href={href}
		className='text-green font-bold'
		target='_blank'
		rel='noreferrer'>
		{children}
	</a>
)
