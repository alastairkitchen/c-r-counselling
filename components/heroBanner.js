
import Image from 'next/image';

export default function HeroBanner({ content }) {
	return (
		<Image
			src="/images/desktop-hero.png"
			alt="Catherine sat in her counselling room smiling"
			width={1440}
			height={700}
		/>
	)
}