module.exports = {
  module: {
    rules: [
      {
        use: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
