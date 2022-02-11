import React, { useState, useEffect } from 'react';
import Crclogo from '../public/images/logos/crcounselling-logo.svg'
import CloseIcon from '../public/images/svg/close-cross.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Header = React.forwardRef(({ aboutMeRef, counsellingRef, appointmentsRef, contactRef, emdrRef, addScrollSpy }, headerRef) => {

	const router = useRouter();

	const [showPopupMessage, setShowPopupMessage] = useState(true);

	const scrollToElement = (e, element) => {
		e.preventDefault();
		if (element) {
			router.push(`/${e.target.hash}`);
			const yOffset = headerRef.current.clientHeight;
			const y = element.getBoundingClientRect().top + window.pageYOffset + -yOffset;
			window.scrollTo({ top: y, behavior: 'smooth' });
		} else {
			router.push(`/${e.target.hash}`);
		}
	}

	useEffect(() => {
		if (headerRef.current) {
			/*
			Initialize scroll spy on home page using addScrollSpy flag
			*/

			if (typeof Gumshoe === 'function' && addScrollSpy) {

				window.spy = new Gumshoe('#site-header-navigation a', {
					navClass: 'site-header__nav-list--active',
					reflow: true,
					offset: (headerRef.current.clientHeight + 5) // 5px offset so that nav becomes active just before section 
				});
			}
		}

		return function cleanup() {
			if (window.spy != undefined && addScrollSpy) {
				window.spy.destroy();
			}
		};

	}, []);

	return (
		<header className="site-header" ref={headerRef}>
			{showPopupMessage && (
				<div className="popup-message" id="popupMessage" role="dialog" aria-describedby="popup-message-description">
					<div className="container-small">
						<div className="row popup-message__row">
							<p id="popup-message-description">I am not taking on new clients at the moment, lorem ispum dolar summit dolar summit At vero eos et accusamus et.</p>
							<button className="popup-message__button" aria-controls="popupMessage" onClick={() => { setShowPopupMessage(false) }}>
								<CloseIcon />
								<span className="screen-reader screen-reader-focusable">Close</span>
							</button>
						</div>
					</div>
				</div>
			)}
			<div className="site-header__outer-wrapper">
				<div className="container">
					<div className="site-header__wrapper">
						<div className="site-header__inner container-small">
							<Link href="/">
								<a href="/">
									<Crclogo title="Catherine Robertson Counselling Logo" className="site-header__logo" />
								</a>
							</Link>
							<nav>
								<ul className="site-header__nav" id="site-header-navigation">
									<li className="site-header__nav-list">
										<a
											onClick={(event) => scrollToElement(event, aboutMeRef ? aboutMeRef.current : false)}
											className="site-header__anchor"
											href="/#about-me-section"
										>About me</a>
									</li>
									<li className="site-header__nav-list">
										<a
											onClick={(event) => scrollToElement(event, counsellingRef ? counsellingRef.current : false)}
											className="site-header__anchor"
											href="/#counselling-section"
										>Counselling</a>
									</li>
									<li className="site-header__nav-list">
										<a
											onClick={(event) => scrollToElement(event, emdrRef ? emdrRef.current : false)}
											className="site-header__anchor"
											href="/#emdr-section"
										>EMDR</a>
									</li>
									<li className="site-header__nav-list">
										<a
											onClick={(event) => scrollToElement(event, appointmentsRef ? appointmentsRef.current : false)}
											className="site-header__anchor"
											href="/#appointments-section"
										>Appointments &amp; pricing</a>
									</li>
									<li className="site-header__nav-list">
										<a
											onClick={(event) => scrollToElement(event, contactRef ? contactRef.current : false)}
											className="site-header__anchor"
											href="/#contact-section"
										>Contact</a>
									</li>
								</ul>
							</nav>

						</div>
					</div>
				</div>
			</div>
		</header>
	)
})