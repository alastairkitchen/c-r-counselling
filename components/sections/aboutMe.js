import { BackgroundBlock } from '../backgroundBlock';
import ImageArticle from "../imageArticle/imageArticle";
import CathyHeadShot from '../../public/images/cathy-headshot-desktop.png';
import ContentBoxBanner from '../contentBoxBanner/contentBoxBanner'

export default function AboutMe({ aboutMeRef }) {

	return (
		<section
			id="about-me-section"
			ref={aboutMeRef}
		>
			<BackgroundBlock>
				<ImageArticle
					title='About Me'
					subHeader='My Approach'
					content='<p>I know that being genuinely listened to and supported to see that your thoughts and feelings are valid can help you to make changes both within yourself and in your life. I won’t tell you how you should feel or what you should do. But I may offer resources that can help you deepen your understanding of yourself, your situation or the choices you can make.</p><p>Because I have completed training in more than one type of therapy, I can adapt my way of working to help clients express their feelings in a way that feels comfortable and constructive for them. My primary training is in person-centred therapy and is at the heart of whatever approach I use. Many studies show that offering this type of authentic, collaborative counselling relationship best supports people to grow, heal and discover new perspectives.</p>'
					image={CathyHeadShot}
				/>
			</BackgroundBlock>

			<BackgroundBlock>
				<ContentBoxBanner
					title='Professional experience'
					columns='2'
					column1Content='<p>I am a BACP Accredited counsellor which means I have significant skills and experience beyond my original qualification and I receive a high standard of training and supervision.</p><p>I have provided counselling since 2010 within schools, universities, a GP practice and a youth project. I use emerging evidence from the sciences to inform my work. My approach is based on understanding how the brain responds to stressful situations as well as how our relationships can mediate adverse experiences that cause poor mental and physical health.</p>'
					column2Content='<ul>
                  <li>MA (Honours) Psychology</li>
                  <li>Postgraduate Diploma in Counselling</li>
                  <li>Advanced Diploma in Counselling Children and Young People Using Creative Arts</li>
                  <li>Certified Cyber-therapist - Adults and Young People</li>
                </ul>'
				/>
			</BackgroundBlock>
		</section>
	)
}