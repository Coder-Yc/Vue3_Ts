module.exports = {
  // outputDir: "./build",
  devServer: {
    proxy: {
      "^/api": {
        target: "http://15:8001",
        pathRewrite: {
          "^/api": "",
        },
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        views: "@/views",
      },
    },
  },
};
