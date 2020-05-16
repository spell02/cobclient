const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const WebpackManifestPlugin = require("webpack-manifest-plugin");

module.exports = merge(common, { 
    mode: "production",
    devtool: "source-map",
    output: {
        publicPath: "https://callofbloodcdn.azureedge.net/",
        filename: "bundle.[chunkhash].js",
    },
    plugins: [
        new WebpackManifestPlugin(),
    ]
});