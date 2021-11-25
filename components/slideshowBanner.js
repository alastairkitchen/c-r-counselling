import React, { useEffect } from 'react';
// import Glide, { Controls, Breakpoints, Move } from '@glidejs/glide/dist/glide.modular.esm'
import Glide from '@glidejs/glide'
import ChevronLeft from '../public/images/svg/chevron-left.svg';
import ChevronRight from '../public/images/svg/chevron-right.svg';

export default function SlideshowBanner({ title, slidesContent }) {

	useEffect(() => {
		if (slidesContent.length > 3 || window.innerWidth < 980) {
			const options = {
				type: 'slider',
				perView: 3,
				gap: 20,
				rewind: false,
				breakpoints: {
					980: {
						perView: 2,
						peek: {
							after: 50
						}
					},
					600: {
						perView: 2,
						peek: {
							after: 25
						}
					}
				}
			}
			const glide = new Glide('.glide', options);
			glide.mount();
		}
	}, []);

	if (typeof window !== "undefined") {

		if (slidesContent.length > 3 || window.innerWidth < 980) {
			return (
				<article className='slideshow-banner'>
					<div className="container-small">
						<div className="row slideshow-banner__row">
							<h2 className="h2 slideshow-banner_title">{title}</h2>
							<div className="glide">
								<div className="glide__track" data-glide-el="track">
									<ul className="glide__slides">
										{slidesContent.map((slideContent, i) => {
											return (<li key={i} className="glide__slide">
												<div className="glide__slide-inner">
													<p>{slideContent}</p>
												</div>
											</li>)
										})}
									</ul>
								</div>


								<div className="glide__arrows" data-glide-el="controls">
									<button className="glide__arrow glide__arrow--left" data-glide-dir="<"><ChevronLeft /> Prev</button>
									<button className="glide__arrow glide__arrow--right" data-glide-dir=">">Next <ChevronRight /></button>
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
		} else {

			return (
				<article className='slideshow-banner'>
					<div className="container-small">
						<div className="row slideshow-banner__row">
							<h2 className="h2 slideshow-banner_title">{title}</h2>
							<ul className="slideshow-grid">
								{slidesContent.map((slideContent, i) => {
									if (i < 3) {
										return (
											<li key={i} className="slideshow-grid__slide">
												<div className="slideshow-grid__slide-inner">
													<p>{slideContent}</p>
												</div>
											</li>
										)
									}

								})}
							</ul>
						</div>
					</div>
				</article>
			)
		}
	} else {

		return (
			<article className='slideshow-banner'>
				<div className="container-small">
					<div className="row slideshow-banner__row">
						<h2 className="h2 slideshow-banner_title">{title}</h2>
						<ul className="slideshow-grid">
							{slidesContent.map((slideContent, i) => {
								if (i < 3) {
									return (
										<li key={i} className="slideshow-grid__slide">
											<div className="slideshow-grid__slide-inner">
												<p>{slideContent}</p>
											</div>
										</li>
									)
								}

							})}
						</ul>
					</div>
				</div>
			</article>
		)
	}



}