

export default function ContentBoxBanner({ listClass }) {
	return (
		<article className="content-box-banner typography-banner">
			<div className="container-small">
				<div className="row content-box-banner__row">
					<div className="content-box-banner__box">
						<h3 className="h3">Professional experience</h3>
						<div className="content-grid">
							<div className="content-grid__col-1">
								<p>I am a BACP Accredited counsellor which means I have significant skills and experience beyond my original qualification and I receive a high standard of training and supervision.</p>
								<p>I have provided counselling since 2010 within schools, universities, a GP practice and a youth project. I use emerging evidence from the sciences to inform my work. My approach is based on understanding how the brain responds to stressful situations as well as how our relationships can mediate adverse experiences that cause poor mental and physical health.</p>
							</div>
							<div className="content-grid__col-2">
								<ul>
									<li>MA (Honours) Psychology</li>
									<li>Postgraduate Diploma in Counselling</li>
									<li>Advanced Diploma in Counselling Children and Young People Using Creative Arts</li>
									<li>Certified Cyber-therapist - Adults and Young People</li>
								</ul>
							</div>
						</div>

					</div>

				</div>
			</div>
		</article>
	)
}