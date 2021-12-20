
import Image from 'next/image';

export default function HeroBanner({ content }) {
	return (
		<div className='hero-banner'>
			<Image
				src="/images/desktop-hero.png"
				alt="Catherine sat in her counselling room smiling"
				layout='fill'
				objectFit='cover'
				objectPosition='76% center'
			/>
		</div>
	)
}