const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
    const isProduction = options.mode === 'production';

    const config = {
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'none' : 'source-map',
        watch: !isProduction,
        context: path.resolve(__dirname),
        entry: ['./src/index.js', './src/sass/main.scss'],
        output: {
            path: path.join(__dirname, './build'),
            filename: 'script.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                    ]
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader',
                    options: {
                        attributes: {
                            root: '.'
                        }
                    }
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: 'index.html',
                filename: "index.html",
                cache: false,
            }),
            new MiniCssExtractPlugin({
                filename: 'style.css',
            })
        ]
    }

    return config;
}
