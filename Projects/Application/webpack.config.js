const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
      index: './index.js',
    },
    devtool: 'inline-source-map',
    plugins: [
      new HtmlWebpackPlugin({
       title: 'Development',
      }),
    ],
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif)$/,
                use: {
                  loader: 'url-loader',
                  options: {
                    name: 'images/[name].[contenthash:8].[ext]',
                  },
                },
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /\/node_modules\//,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  {
                    loader: "css-loader",
                    options: {
                      sourceMap: true,
                    },
                  },
                  {
                    loader: "sass-loader",
                    options: {
                      sourceMap: true,
                    },
                  },
                ],
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      importLoaders: 1
                    }
                  }
                ],
            },
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};
