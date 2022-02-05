import React, { useEffect } from 'react'
import Head from 'next/head'
import { Header } from '../components/header'
import Footer from '../components/footer'
import GumShoeScript from '../components/gumShoeScript'
import Script from 'next/script'


export default function Layout({ children, aboutMeRef, counsellingRef, appointmentsRef, contactRef, emdrRef, addScrollSpy }) {

	const headerRef = React.createRef();

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
					crossOrigin />
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
				addScrollSpy={addScrollSpy}
			></Header>
			<main>
				{children}
			</main>
			<GumShoeScript headerRef={headerRef} addScrollSpy={addScrollSpy} />
			<Footer></Footer>

		</div>
	)
}