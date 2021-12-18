
import Script from 'next/script';

export default function FormBlock({ background }) {

	const backgroundColourMap = {
		grey: 'background-block--grey',
		white: 'background-block--white',
	}

	return (
		<div className="form-block">
			<div className={`form-block__row ${backgroundColourMap[background]}`}>
				<div data-secure-form="crcounselling" data-secure-form-transparent-background="true"></div>
				<Script src="https://hushforms.com/f/public/javascript/embed-hush-form.js" strategy="lazyOnload" />
			</div>
		</div>
	)
}