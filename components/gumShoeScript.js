import Script from 'next/script'

export default function GumShoeScript({ headerRef, addScrollSpy }) {

	return (
		<Script
			id="gumshoe-script"
			src="/js/gumshoe.polyfills.min.js"
			strategy="afterInteractive"
			onLoad={() => {

				console.dir('addScrollSpy ' + addScrollSpy)
				if (addScrollSpy) {
					window.spy = new Gumshoe('#site-header-navigation a', {
						navClass: 'site-header__nav-list--active',
						reflow: true,
						offset: (headerRef.current.clientHeight + 5) // 5px offset so that nav becomes active just before section 
					});
				}

				// Listen for event when navigation becomes active then add active section hash to URL
				// document.addEventListener('gumshoeActivate', function (event) {
				// 	if (typeof window !== undefined) {
				// 		var link = event.detail.link;
				// 		const hash = link.href.split('#').pop();
				// 		history.pushState({}, '', `#${hash}`)
				// 	}
				// }, false);

				console.log('gumshoe initialised');
			}}
		/>
	)
}