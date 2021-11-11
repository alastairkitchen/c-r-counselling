
export default function ContentBanner({ content }) {
	return (
		<div className="content-banner">
			<div className="container-xsmall">
				<div className="row">
					<p className="content-banner__text">{content}</p>
				</div>
			</div>
		</div>
	)
}