import { BackgroundBlock } from '../backgroundBlock';
import ImageArticle from "../imageArticle/imageArticle";
import WorkingLaptopImage from '../../public/images/working-on-laptop.png';


export default function Emdr({ backgroundColours, emdrRef }) {

	return (
		<section
			id="emdr-section"
			ref={emdrRef}
		>
			<BackgroundBlock background={backgroundColours.grey} >
				<ImageArticle
					flip
					title='EMDR'
					content={`
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
              <p>Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam</p>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
            `}
					image={WorkingLaptopImage}

				/>
			</BackgroundBlock>
		</section>
	)
}