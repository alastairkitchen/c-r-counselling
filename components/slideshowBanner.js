import React, { useEffect } from 'react';
// import Glide, { Controls, Breakpoints, Move } from '@glidejs/glide/dist/glide.modular.esm'
import Glide from '@glidejs/glide'

export default function SlideshowBanner() {


	useEffect(() => {

		const glide = new Glide('.glide', {
			type: 'slider',
			perView: 3,
			gap: 20,
			breakpoints: {
				980: {
					perView: 2,
					peek: {
						after: 50
					}
				},
				600: {
					perView: 1,
					peek: {
						after: 25
					}
				}
			}
		});
		glide.mount();
	}, []);

	return (
		<article className='slideshow-banner'>
			<div className="container-small">
				<div className="row slideshow-banner__row">
					<h2 className="h2 slideshow-banner_title">Testimonials</h2>
					<div className="glide">
						<div className="glide__track" data-glide-el="track">
							<ul className="glide__slides">
								<li className="glide__slide">
									<div className="glide__slide-inner">
										<p>Catherine is very easy to talk to and because of this her office became a safe space for me</p>
									</div>
								</li>
								<li className="glide__slide">
									<div className="glide__slide-inner">
										<p>I learnt a lot about how to deal with feelings and emotions</p>
									</div>
								</li>
								<li className="glide__slide">
									<div className="glide__slide-inner">
										<p>Catherine helped me build up my confidence to be more open and communicate with others</p>
									</div>
								</li>
								<li className="glide__slide">
									<div className="glide__slide-inner">
										<p>slide 4 lorem ipsum</p>
									</div>
									<div className="glide__slide-inner">
										<p>slide 5 lorem ipsum</p>
									</div>
								</li>
							</ul>
						</div>


						<div className="glide__arrows" data-glide-el="controls">
							<button className="glide__arrow glide__arrow--left" data-glide-dir="<">{'< prev'}</button>
							<button className="glide__arrow glide__arrow--right" data-glide-dir=">">{'next >'}</button>
						</div>


						<div className="glide__bullets" data-glide-el="controls[nav]">
							<button className="glide__bullet" data-glide-dir="=0"></button>
							<button className="glide__bullet" data-glide-dir="=1"></button>
							<button className="glide__bullet" data-glide-dir="=2"></button>
							<button className="glide__bullet" data-glide-dir="=3"></button>
						</div>
					</div>

				</div>
			</div>
		</article>
	)
}