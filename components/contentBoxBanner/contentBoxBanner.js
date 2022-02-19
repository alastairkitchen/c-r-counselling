import ContentGrid2Col from '../contentGrid/contentGrid2Col';
import ContentGrid3Col from '../contentGrid/contentGrid3Col';

export default function ContentBoxBanner({ background, title, column1Content, column2Content, column3Content, columns }) {

	const backgroundColourMap = {
		grey: 'background-block--grey',
		white: 'background-block--white',
	}

	return (
		<div className="content-box-banner typography-banner">
			<div className="content-box-banner__row">
				<div className={`content-box-banner__box ${backgroundColourMap[background]}`}>
					{title && (<h3 className="h3">{title}</h3>)}

					{columns === '2' ? (
						<ContentGrid2Col
							column1Content={column1Content}
							column2Content={column2Content}
						/>
					) : ''}

					{columns === '3' ? (
						<ContentGrid3Col
							column1Content={column1Content}
							column2Content={column2Content}
							column3Content={column3Content}
						/>
					) : ''}

				</div>
			</div>
		</div>
	)
}