import parse from 'html-react-parser';

export default function BlogContentColumn({ title, htmlContent }) {

	return (
		<div className='blog-content-col typography-banner'>
			{title && (
				<span className="font-spacer">
					<h2 className='h2'>{title}</h2>
				</span>
			)}
			{htmlContent && parse(htmlContent)}
		</div>
	)
}