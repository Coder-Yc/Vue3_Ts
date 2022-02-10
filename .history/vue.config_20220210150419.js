module.exports = {
  outputDir: "./build",

  devServer: {
    proxy: {
      
    }
  }
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        views: "@/views",
      },
    },
  },
};
