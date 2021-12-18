import React from 'react';

export const BackgroundBlock = React.forwardRef(({ children, container, background, htmlId }, ref) => {

	const containerClass = (containerClass) => {

		if (containerClass === 'xsmall') {
			return 'container-xsmall'
		}
		if (containerClass === 'small') {
			return 'container-small'
		}
		if (containerClass === 'none') {
			return ''
		}
		return 'container-small'
	}

	const backgroundColourMap = {
		grey: 'background-block--grey',
		white: 'background-block--white',
	}

	if (htmlId) {
		return (
			<article
				ref={ref}
				id={htmlId}
				className={`background-block ${background ? backgroundColourMap[background] : ''}`}
			>
				<div className={`${containerClass(container)}`}>
					<div className="row">
						{children}
					</div>
				</div>
			</article>
		)
	} else {
		return (
			<article
				ref={ref}
				className={`background-block ${background ? backgroundColourMap[background] : ''}`}
			>
				<div className={`${containerClass(container)}`}>
					<div className="row">
						{children}
					</div>
				</div>
			</article>
		)
	}
});
