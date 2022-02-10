module.exports = {
  // outputDir: "./build",
  devServer: {
    proxy: {
      "": {
        target: "http://106.55.150.150:8001",
        pathRewrite: {
          "": "",
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
