import React, { useEffect } from 'react'
import Head from 'next/head'
import { Header } from '../components/header'
import Footer from '../components/footer'


export default function Layout({ children, aboutMeRef, counsellingRef, appointmentsRef, contactRef, emdrRef }) {

	const headerRef = React.createRef();

	useEffect(() => {
		if (headerRef.current) {

			const spy = new Gumshoe('#site-header-navigation a', {
				navClass: 'site-header__nav-list--active',
				offset: (headerRef.current.clientHeight + 5) // 5px offset so that nav becomes active just before section 
			});

			// Listen for event when navigation becomes active then add active section hash to URL
			document.addEventListener('gumshoeActivate', function (event) {
				if (typeof window !== undefined) {
					var link = event.detail.link;
					const hash = link.href.split('#').pop();
					history.pushState({}, '', `#${hash}`)
				}
			}, false);

			if (aboutMeRef === undefined || counsellingRef === undefined || appointmentsRef === undefined || contactRef === undefined) {
				spy.destroy();
			}
		}

	}, []);

	useEffect(() => {

		if (typeof window !== undefined) {

			const yOffset = headerRef.current ? headerRef.current.clientHeight : '113';

			if (window.location.hash !== '') {
				if (window.location.hash === '#about-me-section') {
					const y = aboutMeRef.current.getBoundingClientRect().top + window.pageYOffset + -yOffset;
					window.setTimeout(() => {
						window.scrollTo({ top: y, behavior: 'smooth' });
					}, 1)
				}
				if (window.location.hash === '#counselling-section') {
					const y = counsellingRef.current.getBoundingClientRect().top + window.pageYOffset + -yOffset;
					window.setTimeout(() => {
						window.scrollTo({ top: y, behavior: 'smooth' });
					}, 1)
				}
				if (window.location.hash === '#appointments-section') {
					const y = appointmentsRef.current.getBoundingClientRect().top + window.pageYOffset + -yOffset;
					window.setTimeout(() => {
						window.scrollTo({ top: y, behavior: 'smooth' });
					}, 1)
				}
				if (window.location.hash === '#contact-section') {
					const y = contactRef.current.getBoundingClientRect().top + window.pageYOffset + -yOffset;
					window.setTimeout(() => {
						window.scrollTo({ top: y, behavior: 'smooth' });
					}, 1)
				}
				if (window.location.hash === '#contact-section') {
					const y = emdrRef.current.getBoundingClientRect().top + window.pageYOffset + -yOffset;
					window.setTimeout(() => {
						window.scrollTo({ top: y, behavior: 'smooth' });
					}, 1)
				}
			}
		}

	}, []);

	return (
		<div>

			<Head>
				{/* Fonts --------------------------------------------------------------- */}
				<link rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin />
				<link rel="preload"
					as="style"
					href="//fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&display=swap" rel="stylesheet" />
				<link rel="preload"
					as="style"
					href="//fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&display=swap" rel="stylesheet" />
				{/* --------------------------------------------------------------------- */}
				<title>Catherine Robertson Counselling</title>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<meta name="description" content="Catherine robertson counselling site coming soon"></meta>
			</Head>

			<Header
				aboutMeRef={aboutMeRef}
				counsellingRef={counsellingRef}
				appointmentsRef={appointmentsRef}
				contactRef={contactRef}
				emdrRef={emdrRef}
				ref={headerRef}
			></Header>
			<main>
				{children}
			</main>

			<Footer></Footer>

		</div>
	)
}