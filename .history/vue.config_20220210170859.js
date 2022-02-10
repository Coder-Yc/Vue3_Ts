module.exports = {
  // outputDir: "./build",
  devServer: {
    proxy: {
      "^/api": {
        target: "http://106.55.150.150:8001",
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
