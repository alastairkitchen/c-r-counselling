
import Script from 'next/script';

export default function FormBlock({ background, title }) {

	const backgroundColourMap = {
		grey: 'background-block--grey',
		white: 'background-block--white',
	}

	return (
		<div className="form-block">
			<Script
				src="https://hushforms.com/f/public/javascript/embed-hush-form.js"
				strategy="afterInteractive"
			/>
			{title && (
				<div className="form-block__title-wrapper">
					<h3 className="form-block__title">{title}</h3>
				</div>
			)}
			<div className={`form-block__row ${backgroundColourMap[background]}`}>
				<div data-secure-form="crcounselling" data-secure-form-transparent-background="true"></div>
			</div>
		</div>
	)
}