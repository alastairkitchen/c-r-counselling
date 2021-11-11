
import Image from 'next/image';
import parse from 'html-react-parser';

export default function ImageArticle({ listClass, flip, header, subHeader, content, image }) {
	return (
		<article className={`image-article typography-banner ${flip ? 'image-article--flip' : ''}`}>
			<div className="container-small">
				<div className="row image-article__row">
					<div className="image-article__image-col">
						{Image && (
							<Image
								src={image}
								alt="Catherine Profile Shot"
							/>
						)}
					</div>
					<div className="image-article__text-col">
						<h2 className="h2">{header}</h2>
						{subHeader && (<p className="bold-header">{subHeader}</p>)}
						{content && (parse(content))}
					</div>
				</div>
			</div>
		</article>
	)
}