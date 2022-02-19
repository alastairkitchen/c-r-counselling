
import parse from 'html-react-parser';

export default function ContentGrid3Col({ column1Content, column2Content, column3Content }) {

	return (
		<div className="content-grid content-grid--3-col">
			<div className="content-grid__col-1">
				{column1Content && (parse(column1Content))}
			</div>
			<div className="content-grid__col-2">
				{column2Content && (parse(column2Content))}
			</div>
			<div className="content-grid__col-3">
				{column3Content && (parse(column3Content))}
			</div>
		</div>

	)
}