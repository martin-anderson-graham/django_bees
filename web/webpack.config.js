const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleTracker = require('webpack-bundle-tracker')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: "./src/App.tsx",
    output: {
        path: path.join(__dirname, "../django_bees/static/"),
        filename: `react-app.js`,
        // publicPath: 'static/frontend/'
    },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devServer: { contentBase: path.join(__dirname, "src") },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"],
            },
        ],
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: path.join(__dirname, "src", "index.html"),
        // }),
        new CleanWebpackPlugin(),
        new BundleTracker({
            path: __dirname,
            filename: './webpack-stats.json',
        }),
    ],
};
