import Image from 'next/image'
import SocialIcons from './socialIcons/socialIcons';
import BacpLogo from '/Volumes/alimac/websites/c-r-counselling/public/images/accreditations/bacp-logo.png';
import ActoLogo from '/Volumes/alimac/websites/c-r-counselling/public/images/accreditations/acto-logo.png';

export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="container-small">
				<div className="row">
					<div className="site-footer__inner">

						<div className="site-footer__address-col">
							<address>
								<p className="site-footer__paragraph"><span className="bold-font">Address: </span> Catherine Robertson Counselling, Sandyford Place, Glasgow G3 7NG</p>
							</address>
							<p className="site-footer__paragraph"><span className="bold-font">Hours available: </span> Monday 1pm - 5pm and Tuesday 5.30pm - 9pm</p>
							<p className="site-footer__paragraph"><span className="bold-font">Call: </span> 07843 933 343</p>
							<p className="extra-paragraph-margin site-footer__paragraph"><span className="bold-font">Email: </span> <a className="anchor-link-alt" href="mailto:catherine@crcounselling.com">catherine@crcounselling.com</a></p>
							<SocialIcons listClass="site-footer__social-icons" />
							<ul className="inline-list">
								<li><a href="#">Privacy Policy</a></li>
								<li><a href="#">Cookies Policy</a></li>
							</ul>
						</div>

						<div className="site-footer__links-col">
							<ul className="site-footer__links-list remove-default-list link-list-row">
								<li><a className="anchor-link" href="#">Counselling for Adult FAQs</a></li>
								<li><a className="anchor-link" href="#">Counselling for Children and Young People FAQs</a></li>
								<li><a className="anchor-link" href="#">Online Counselling FAQs</a></li>
							</ul>
							<ul className="accreditation-logos remove-default-list">
								<li className="accreditation-logos__bacp">
									<Image
										src={BacpLogo}
										alt="Bacp Logo"
									/>
								</li>
								<li>
									<Image
										src={ActoLogo}
										alt="Acto Logo"
									/>
								</li>
							</ul>
						</div>
					</div>

				</div>
			</div>

		</footer>
	)
}