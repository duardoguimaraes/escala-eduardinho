module.exports = {
	globDirectory: 'dist',
	globPatterns: [
		'**/*.{json,html,png,ico,js}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};