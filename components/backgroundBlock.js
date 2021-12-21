import React from 'react';

export const BackgroundBlock = ({ children, container, background, htmlId }) => {

	const containerClass = (containerClass) => {
		if (containerClass === 'xxsmall') {
			return 'container-xxsmall'
		}
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
};
