module.exports = {
  outputDir: "./build",

  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000'
      }
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
