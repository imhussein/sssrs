const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config");

const clientConfig = {
  entry: "./src/client/index.js",
  output: {
    filename: "client_bundle.js",
    path: path.join(__dirname, "src", "public")
  }
};

module.exports = merge(baseConfig, clientConfig);
