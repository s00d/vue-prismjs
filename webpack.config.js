const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
        dev: './src/dev.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        libraryExport: 'default',
        globalObject: 'this'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        static: path.join(__dirname, 'src'),
        port: 8080,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            vue: 'vue/dist/vue.js'
        },
    },
};

