import Script from 'next/script'

export default function GumShoeScript({ headerRef, addScrollSpy }) {

	return (
		<Script
			id="gumshoe-script"
			src="/js/gumshoe.polyfills.min.js"
			strategy="afterInteractive"
			onLoad={() => {

				if (addScrollSpy) {
					window.spy = new Gumshoe('#site-header-navigation a', {
						navClass: 'site-header__nav-list--active',
						reflow: true,
						offset: (headerRef.current.clientHeight + 5) // 5px offset so that nav becomes active just before section 
					});
				}

			}}
		/>
	)
}