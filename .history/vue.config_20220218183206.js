module.exports = {
  // outputDir: "./build",
  lintOnSave:
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        views: '@/views',
        assets: '@/assets',
        baseUi: '@/base-ui',
        utils: '@/utils'
      }
    }
  }
}