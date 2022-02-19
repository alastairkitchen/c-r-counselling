// next.config.js
const withTM = require('next-transpile-modules')(['@glidejs/glide']); // pass the modules you would like to see transpiled

module.exports = withTM({
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack']
		})

		return config
	}
});
