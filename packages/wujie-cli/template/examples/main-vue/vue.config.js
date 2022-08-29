const { defineConfig } = require("@vue/cli-service");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias.set("@$", resolve("src"));
  },
  lintOnSave: false,
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    host: "localhost",
    open: true,
  },
});
