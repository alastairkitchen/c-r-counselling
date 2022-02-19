import { BackgroundBlock } from '../backgroundBlock';
import ContentBanner from "../contentBanner";
import FormBlock from '../formBlock';

export default function Contact({ backgroundColours, contactContent, contactRef }) {

	return (
		<section
			id="contact-section"
			ref={contactRef}
		>
			<ContentBanner
				title='Contact'
				content={'Use the secure form below to book in for an initial consultation or to ask any questions you may have. I will respond to your message within 2 business days.'}
				size="small"
				containerSize='small'
			/>

			<BackgroundBlock
				background={backgroundColours.grey}
			>
				<FormBlock
					title='Secure Online Contact Form'
					background={backgroundColours.white}
				/>
			</BackgroundBlock>

			<ContentBanner
				content={'If you are feeling overwhelmed and unable to cope, it is important you seek help now. If you are planning to immediately act upon suicidal thoughts, call 999. Otherwise, here are some more crisis options:'}
				htmlContent={contactContent}
				size="small"
				textAlign='left'
				containerSize='small'
			/>
		</section>
	)
}