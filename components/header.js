import Image from 'next/image';
import Crclogo from '../public/images/logos/crcounselling-logo.svg'

export default function Header() {
	return (
		<header className="site-header">
			<div className="container">
				<div className="site-header__inner container-small">
					<Crclogo className="site-header__logo" />
					<nav>
						<ul className="site-header__nav">
							<li className="site-header__nav-list"><a className="site-header__anchor" href="#">About me</a></li>
							<li className="site-header__nav-list"><a className="site-header__anchor" href="#">Counselling</a></li>
							<li className="site-header__nav-list"><a className="site-header__anchor" href="#">Appointments and pricing</a></li>
							<li className="site-header__nav-list"><a className="site-header__anchor" href="#">Contact</a></li>
						</ul>
					</nav>

				</div>
			</div>

		</header>
	)
}