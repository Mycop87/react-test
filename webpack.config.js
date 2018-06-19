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
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {test: /\.tsx?$/, loader: "awesome-typescript-loader"},

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"},
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },

};

module.exports = config;