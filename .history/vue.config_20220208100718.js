
const AutoImport = require('unplugin-auto-import/webpack')
module.exports = {
  outputDir: './build',

module.exports = {
  outputDir: "./build",


  configureWebpack: {
    resolve: {
      alias: {
<<<<<<< HEAD
        components: '@/components'
      }
    }
  }
}
=======
        components: "@/components",
        views: "@/views",
      },
    },
  },
};
>>>>>>> 3d04a01 (首页搭建)
