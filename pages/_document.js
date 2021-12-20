import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {

	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
					<script src="/js/gumshoe.polyfills.min.js" />
				</body>
			</Html>
		)
	}
}

export default MyDocument