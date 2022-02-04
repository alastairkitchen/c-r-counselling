import { BackgroundBlock } from '../backgroundBlock';
import ImageArticle from "../imageArticle/imageArticle";
import ContentBoxBanner from '../contentBoxBanner/contentBoxBanner'
import RoomImage from '../../public/images/counselling-room-setup.png';
import PlayTherepyImage from '../../public/images/play-therapy.png';

export default function Counselling({ backgroundColours, counsellingRef }) {

	return (
		<section
			id="counselling-section"
			ref={counsellingRef}
		>
			<BackgroundBlock
				background={backgroundColours.grey}
			>
				<ImageArticle
					flip
					title='Counselling for adults'
					content={`
              <p>Are you struggling with something that feels outside of your control?</p>
              <p>You might be feeling overwhelmed, upset or stuck with your problems. I know asking for support with this might feel difficult. You may even feel unsure whether talking to someone will really help. It is normal to feel nervous and I will be sensitive to this when we first meet.</p>
              <p>I will take time to create a space that feels safe for you to talk about difficult feelings or experiences you’ve had. Often people feel a great sense of relief once able to open up. Over time, you can also expect to feel more confident in yourself and in control of your life again.</p>
              <p>The counselling I offer will focus on your needs, wants and goals. Where these may feel unclear, you will be supported to discover what these are. Whilst many people benefit from talking about their problems, we can explore if other ways of working could help you.</p>
              <p><a class="anchor-link-alt" href="#add-pdf">Download Counselling for Adults FAQs PDF</a></p>
              <p><a class="anchor-link-alt" href="#add-pdf">Download Online Counselling FAQs PDF</a></p>
            `}
					image={RoomImage}

				/>
				<ContentBoxBanner
					background={backgroundColours.white}
					title='What I can help with:'
					columns='3'
					column1Content='<ul><li>Feelings of anxiety and depression</li><li>Family Issues</li><li>Relationship Issues</li><li>Work-related Stress or Bullying</li></ul>'
					column2Content='<ul><li>Low Confidence and Self-Esteem</li><li>Childhood Issues</li><li>Abuse and Trauma</li><li>Self-harm and Suicidal Thoughts</li></ul>'
					column3Content='<ul><li>Bereavement and Loss</li><li>LGBTQI+ Issues</li><li>Chronic Health Issues</li><li>Asperger’s Syndrome and ADHD</li></ul>'
				/>
			</BackgroundBlock>

			<BackgroundBlock>
				<ImageArticle
					title='Counselling for children and young people'
					content='<p>Are you concerned about your child’s behaviour?</p><p>They may have become very nervous, withdrawn or difficult to manage. It might feel like nothing seems to help or you just can’t get them to open up.</p><p>Just like adults, children and young people benefit from having a private, confidential space to figure out their feelings. I am trained to use play, arts and talking therapy to support children to communicate difficulties in their lives in a way that works for them.</p><p>Being helped to understand confusing feelings can be a powerful experience for a child or young person. As they gain the tools to express themselves, they are likely to feel more confident about themselves and more able to manage challenging situations in the future.</p><p>As their parent, I will make sure you feel supported throughout their counselling too.</p><a class="anchor-link-alt" href="#add-pdf">Download Counselling for Children and Young People FAQs PDF</a>'
					image={PlayTherepyImage}

				/>
				<ContentBoxBanner
					background={backgroundColours.grey}
					title='Issues in children I work with'
					columns='3'
					column1Content='<ul><li>Family Problems</li><li>Low Confidence and Self-Esteem</li><li>Bereavement and Loss</li><li>Low Mood and Anxiety</li></ul>'
					column2Content='<ul><li>Post-traumatic Stress and Trauma</li><li>Physical, Emotional or Sexual Abuse</li><li>Friendship and School Issues</li><li>Bullying-related Trauma</li></ul><ul>'
					column3Content='<ul><li>Separation Anxiety</li><li>LGBTQI+ Issues</li><li>Self-harm and Suicidal Thoughts</li><li>Asperger’s Syndrome and ADHD</li></ul>'
				/>
			</BackgroundBlock>
		</section>
	)
}