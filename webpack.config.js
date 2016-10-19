var webpack = require("webpack");
var path = require("path");
module.exports = {
    entry: "./App.jsx",
    output: {
        path: path.join(__dirname, "public"),
        filename: "index.js"
    },
    module: {
        loaders: [
        { test: /\.js$/,   loader: "babel", exclude: /node_modules/, query: { presets: ['es2015', 'react'] } },
          { test: /\.jsx$/, loaders: ['jsx-loader', "babel-loader?stage=0"]  }
        ],
    },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
