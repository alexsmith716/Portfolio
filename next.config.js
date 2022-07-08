module.exports = {
	compiler: {
		styledComponents: true,
	},
	reactStrictMode: true,
	env: {},

	webpack: (config, {dev, webpack, isServer}) => {
		config.module.rules.push({
			test: /\.(graphql|gql)$/,
			exclude: /node_modules/,
			loader: 'graphql-tag/loader',
		});
		config.plugins.push(
			new webpack.DefinePlugin({
				__DEV__: dev,
				__IS_SERVER__: isServer,
			})
		);
		return config;
	},
}
