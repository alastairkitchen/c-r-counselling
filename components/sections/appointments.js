import { BackgroundBlock } from '../backgroundBlock';
import ImageArticle from '../imageArticle/imageArticle'
import AimForTheBushesImage from '../../public/images/bushes.png';


export default function Appointments({ appointmentsRef }) {

	return (
		<section
			id="appointments-section"
			ref={appointmentsRef}
		>
			<BackgroundBlock>
				<ImageArticle
					title='Appointments and pricing'
					content='<p>Our first appointment together will be an initial consultation.</p><p>This is an opportunity for you to tell me about the problems you are facing. We will briefly discuss both past and present circumstances that may be affecting you or your child now.</p><p>This overview of your situation will help us best decide whether the counselling I offer is likely to be helpful.</p><p>It is important that you feel comfortable with me for counselling to work. Therefore this first meeting also lets you get to know me a little before deciding whether to commit to sessions.</p><p>If we agree to work together, I will let you know whether you or your child will benefit most from brief or long-term support. I usually suggest meeting weekly at the same day and time.</p><h3>Fees</h3><ul class="remove-default-list list-line-height"><li>Initial Consultation: £50</li><li>Adult Counselling Session: £50</li><li>CYP Counselling Session: £55-60</li></ul>'
					image={AimForTheBushesImage}

				/>
			</BackgroundBlock>
		</section>
	)
}