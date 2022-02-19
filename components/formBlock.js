
import Script from 'next/script';
import { useEffect } from 'react';

export default function FormBlock({ background, title }) {

	const backgroundColourMap = {
		grey: 'background-block--grey',
		white: 'background-block--white',
	}

	useEffect(() => {
		// refresh form when component mounts, fix for bug where form init is lost when users navigate away from homepage and back again
		window.HUSH ? window.HUSH.embedHushForm.refresh() : null
	}, []);

	return (
		<div className="form-block">
			<Script
				id="hush-forms-script"
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