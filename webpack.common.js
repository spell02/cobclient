const Path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const {StylableWebpackPlugin} = require("@stylable/webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.[chunkhash].js",
        path: Path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: "ts-loader",
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                // Ignore *.st.css files, those should be handled by stylable
                test: /^(?!.*\.st\.css$).*\.css/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new StylableWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Call of Blood",
            template: "src/index.html",
        }),
    ]
};
