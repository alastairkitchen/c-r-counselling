
export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="container">
				<div className="container-small">
					<div className="site-footer__inner">

						<div className="site-footer__left-col">
							<address>
								<p><span className="bold-font">Address:</span> Catherine Robertson Counselling, Sandyford Place, Glasgow G3 7NG</p>
							</address>
							<p><span className="bold-font">Hours available:</span> Monday 1pm - 5pm and Tuesday 5.30pm - 9pm</p>
							<p><span className="bold-font">Call:</span> 07843 933 343</p>
							<p><span className="bold-font">Email:</span> <a href="mailto:catherine@crcounselling.com">catherine@crcounselling.com</a></p>

							<div>[logos]</div>
							<ul className="inline-list">
								<li><a href="#">Privacy Policy</a></li>
								<li><a href="#">Cookies Policy</a></li>
							</ul>
						</div>

						<div className="site-footer__right-col">
							<ul>
								<li><a href="#">Counselling for Adult FAQs</a></li>
								<li><a href="#">Counselling for Children and Young People FAQs</a></li>
								<li><a href="#">Online Counselling FAQs</a></li>
							</ul>

						</div>
					</div>

				</div>
			</div>

		</footer>
	)
}