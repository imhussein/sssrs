const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config");
const webpackNodeExternals = require("webpack-node-externals");

const serverConfig = {
  target: "node",
  entry: "./src/server/server.js",
  output: {
    filename: "server_bundle.js",
    path: path.join(__dirname, "src", "build")
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, serverConfig);
