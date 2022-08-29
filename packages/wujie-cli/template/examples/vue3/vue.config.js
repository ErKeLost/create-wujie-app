const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: "8082",
  },
  lintOnSave: false
});
