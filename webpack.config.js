
module.exports = {
    entry: __dirname + '/src/main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'jsx-loader'
            }
        ]
    }
}