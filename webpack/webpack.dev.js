const path = require('path'); //для того чтобы превратить отнсительный путь в абсолютный мы будем использовать пакет path
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		historyApiFallback: true,
		static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
		// compress: true, // это ускорит загрузку в режиме разработки
		port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
		open: true, // сайт будет открываться сам при запуске npm run dev
		hot: true,
		watchFiles: {
			paths: ['src/**/*'],
			options: {
				usePolling: true,
				interval: 1000,
				aggregateTimeout: 300,
			},
		},
	},
	watchOptions: {
		poll: 1000,
		ignored: /node_modules/,
	  },
	plugins: [new ReactRefreshWebpackPlugin()],
};
