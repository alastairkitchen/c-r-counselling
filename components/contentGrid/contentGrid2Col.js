
import parse from 'html-react-parser';

export default function ContentGrid2Col({ column1Content, column2Content }) {

	return (
		<div className="content-grid">
			<div className="content-grid__col-1">
				{column1Content && (parse(column1Content))}
			</div>
			<div className="content-grid__col-2">
				{column2Content && (parse(column2Content))}
			</div>
		</div>

	)
}