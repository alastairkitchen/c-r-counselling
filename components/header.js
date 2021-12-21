import React, { useState } from 'react';
import Crclogo from '../public/images/logos/crcounselling-logo.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Header = React.forwardRef(({ aboutMeRef, counsellingRef, appointmentsRef, contactRef, emdrRef }, headerRef) => {

	const router = useRouter();

	const [showPopupMessage, setShowPopupMessage] = useState(true);

	const scrollToElement = (e, element) => {
		e.preventDefault();
		if (element) {
			const yOffset = headerRef.current.clientHeight;
			const y = element.getBoundingClientRect().top + window.pageYOffset + -yOffset;
			window.scrollTo({ top: y, behavior: 'smooth' });
		} else {
			router.push(`/${e.target.hash}`)
		}
	}

	return (
		<header className="site-header" ref={headerRef}>
			<div className="site-header__outer-wrapper">
				<div className="container">
					<div className="site-header__wrapper">
						<div className="site-header__inner container-small">
							<Link href="/">
								<a href="/">
									<Crclogo className="site-header__logo" />
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
			{showPopupMessage && (
				<div className="site-header__popup-message">
					<div className="container-small">
						<p>I am not taking on new clients at the moment, lorem ispum dolar summit dolar summit At vero eos et accusamus et.</p>
						<button onClick={() => { setShowPopupMessage(false) }}>X</button>
					</div>
				</div>
			)}
		</header>
	)
})