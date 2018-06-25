var path = require("path");
var config = {
    entry: ["./index.tsx"],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [

            {test: /\.tsx?$/, loader: "awesome-typescript-loader"},

            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"},

            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },

};

module.exports = config;