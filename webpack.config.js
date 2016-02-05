
const USER = process.env.USER || 'Trall';

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js",
        library: 'homeTest'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
             test: /\.jsx?$/,
             exclude: /(node_modules|bower_components)/,
             loader: 'babel', // 'babel-loader' is also a legal name to reference
             query: {
               presets: ['react', 'es2015']
             }
           }
        ]
    },
    //watch: true,
    //progress: true,
    devtool: 'source-map'
};
