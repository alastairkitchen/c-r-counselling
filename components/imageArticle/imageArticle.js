
import Image from 'next/image';
import CathyHeadShot from '../../public/images/cathy-headshot-desktop.png';

export default function ImageArticle({ listClass }) {
	return (
		<article className="image-article">
			<div className="container-small">
				<div className="row image-article__row">
					<div className="image-article__image-col">
						<Image
							src={CathyHeadShot}
							alt="Catherine Profile Shot"
						/>
					</div>
					<div className="image-article__text-col">
						<h2 className="h2">About Me</h2>
						<p className="bold-header">My Approach</p>
						<p>I know that being genuinely listened to and supported to see that your thoughts and feelings are valid can help you to make changes both within yourself and in your life. I won’t tell you how you should feel or what you should do. But I may offer resources that can help you deepen your understanding of yourself, your situation or the choices you can make.</p>
						<p>Because I have completed training in more than one type of therapy, I can adapt my way of working to help clients express their feelings in a way that feels comfortable and constructive for them. My primary training is in person-centred therapy and is at the heart of whatever approach I use. Many studies show that offering this type of authentic, collaborative counselling relationship best supports people to grow, heal and discover new perspectives.</p>
					</div>
				</div>
			</div>
		</article>
	)
}