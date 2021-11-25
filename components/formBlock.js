
export default function FormBlock({ background }) {

	const backgroundColourMap = {
		grey: 'background-block--grey',
		white: 'background-block--white',
	}

	return (
		<div className="form-block">
			<div className={`form-block__row ${backgroundColourMap[background]}`}>
				<form>
					<label>Your Name</label>
					<input type="text" name="your name" />
					<label>Message</label>
					<textarea name="message"></textarea>
				</form>
				<div data-secure-form="crcounselling" data-secure-form-transparent-background="true"></div>
				<script src="https://hushforms.com/f/public/javascript/embed-hush-form.js"></script>
			</div>
		</div>
	)
}