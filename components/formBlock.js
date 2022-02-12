
import Script from 'next/script';
import { useState, useEffect } from 'react';

export default function FormBlock({ background, title }) {

	const [hushLoaded, setHushLoaded] = useState(false);

	const backgroundColourMap = {
		grey: 'background-block--grey',
		white: 'background-block--white',
	}

	useEffect(() => {
		/*
		// BUG figure out a way to reload hush if the target is empty
		const hushTarget = document.getElementById('hush-form-target');
		console.dir(hushLoaded);
		if (hushLoaded === false && hushTarget && hushTarget.firstChild === null) {
			const existingScript = document.getElementById('hush-forms-script');
			const existingScriptDynamic = document.getElementById('hush-forms-script-dynamic');
			if (existingScript) {
				existingScript.parentNode.removeChild(existingScript);
				const script = document.createElement('script');
				script.src = 'https://hushforms.com/f/public/javascript/embed-hush-form.js';
				script.id = 'hush-forms-script-dynamic';
				document.body.appendChild(script);
			}
		}
		*/
	});

	return (
		<div className="form-block">
			<Script
				id="hush-forms-script"
				src="https://hushforms.com/f/public/javascript/embed-hush-form.js"
				strategy="afterInteractive"
				onLoad={() => {
					setHushLoaded(true);
				}}
			/>
			{title && (
				<div className="form-block__title-wrapper">
					<h3 className="form-block__title">{title}</h3>
				</div>
			)}
			<div className={`form-block__row ${backgroundColourMap[background]}`}>
				<div data-secure-form="crcounselling" data-secure-form-transparent-background="true" id="hush-form-target"></div>
			</div>
		</div>
	)
}