import parse from 'html-react-parser';

export default function ContentBanner({ title, content, size, textAlign, htmlContent, containerSize }) {

	return (
		<div className={`content-banner ${size ? `content-banner--${size}` : ''} ${textAlign ? `content-banner--${textAlign}` : ''}`}>
			<div className={`${containerSize ? `container-${containerSize}` : 'container-xsmall'}`}>
				<div className="row">
					{title && (
						<h2 className="h2">{title}</h2>
					)}
					<p className="content-banner__text">{content}</p>
					{htmlContent && (<div className="content-banner__custom-text">{parse(htmlContent)}</div>)}
				</div>
			</div>
		</div>
	)
}