module.exports = {
  // outputDir: "./build",
  devServer: {
    proxy: {
      "^/api": {
        target: "http://152.136.185.:8001",
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
