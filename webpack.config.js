const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const  webpack  = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.ts'),
    },
    
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
      },
      
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.pug'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'index.css',
          }), 
          new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
          }) 
    ],
    
    module: {
        rules: [
            // JavaScript
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
              },
              {
                test:/\.pug$/,//  препроцессор HTML
                loader:'pug-loader',// загрузчик pug
                options: {
                    pretty: true
                  },
            },
            // шрифты и SVG
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            // изображения
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            //  Sass
            {
                test:/\.sass$/,//препроцессор css
                use:
                [
                    {
                    loader: MiniCssExtractPlugin.loader,
                },
                'css-loader',
                'sass-loader'
            ]
            },
            {
                test:/\.css$/,// css
                use:[
                    {
                    loader: MiniCssExtractPlugin.loader,
                }, 'css-loader']
            },
        ],
    }
}