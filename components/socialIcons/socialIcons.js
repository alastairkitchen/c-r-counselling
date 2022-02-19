
import InstagramIcon from '../../public/images/logos/instagram-logo.svg';
import FacebookIcon from '../../public/images/logos/facebook-logo.svg';
import LinkedInIcon from '../../public/images/logos/linkedin-logo.svg';

export default function SocialIcons({ listClass }) {
	return (
		<ul className={`${listClass} social-icons-list remove-default-list inline-list inline-list--remove-spacers`}>
			<li><InstagramIcon title="Instagram" className="svg" /></li>
			<li><FacebookIcon title="Facebook" className="svg" /></li>
			<li><LinkedInIcon title="linked In" className="svg" /></li>


		</ul>
	)
}