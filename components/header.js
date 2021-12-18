import Crclogo from '../public/images/logos/crcounselling-logo.svg'

export default function Header({ aboutMeRef, counsellingRef, appointmentsRef, contactRef }) {

	const scrollToElement = (e, element) => {
		e.preventDefault();
		element.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<header className="site-header">
			<div className="container">
				<div className="site-header__inner container-small">
					<Crclogo className="site-header__logo" />
					<nav>
						<ul className="site-header__nav">
							<li className="site-header__nav-list">
								<a
									onClick={(event) => scrollToElement(event, aboutMeRef.current)}
									className="site-header__anchor"
									href="#about-me-section"
								>About me</a>
							</li>
							<li className="site-header__nav-list">
								<a
									onClick={(event) => scrollToElement(event, counsellingRef.current)}
									className="site-header__anchor"
									href="#counselling-section"
								>Counselling</a>
							</li>
							<li className="site-header__nav-list">
								<a
									onClick={(event) => scrollToElement(event, appointmentsRef.current)}
									className="site-header__anchor"
									href="#appointments-section"
								>Appointments and pricing</a>
							</li>
							<li className="site-header__nav-list">
								<a
									onClick={(event) => scrollToElement(event, contactRef.current)}
									className="site-header__anchor"
									href="#contact-section"
								>Contact</a>
							</li>
						</ul>
					</nav>

				</div>
			</div>

		</header>
	)
}