const AutoImport = require('unplugin-auto-import/webpack')
module.exports = {
  outputDir: './build',

  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
}
