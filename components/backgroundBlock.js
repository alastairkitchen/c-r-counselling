export default function BackgroundBlock({ children, container, background }) {

	const containerClass = (containerClass) => {

		if (containerClass === 'xsmall') {
			return 'container-xsmall'
		}
		if (containerClass === 'small') {
			return 'container-small'
		}
		return 'container-small'
	}

	const backgroundColourMap = {
		grey: 'background-block--grey',
		white: 'background-block--white',
	}

	return (
		<article className={`background-block ${background ? backgroundColourMap[background] : ''}`}>
			<div className={`${containerClass(container)}`}>
				<div className="row">
					{children}
				</div>
			</div>
		</article>
	)
}