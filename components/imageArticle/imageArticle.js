
import Image from 'next/image';
import parse from 'html-react-parser';

export default function ImageArticle({ flip, title, subHeader, content, image }) {
	return (
		<div className={`image-article typography-banner ${flip ? 'image-article--flip' : ''}`}>
			<div className="image-article__row">
				<div className="image-article__image-col">
					{Image && (
						<div className="image-article__image-wrapper">
							<Image
								src={image}
								alt='Catherine Profile Shot'
								layout='fill'
								objectFit='cover'
							/>
						</div>
					)}
				</div>
				<div className="image-article__text-col">
					<span className="font-spacer"><h2 className="h2">{title}</h2></span>
					{subHeader && (<p className="bold-header">{subHeader}</p>)}
					{content && (parse(content))}
				</div>
			</div>
		</div>
	)
}