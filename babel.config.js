module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        libraryDirectory: 'lib',
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`
        }
        // "styleLibraryName": "theme-chalk"
      }
    ]
  ],
  presets: ['@vue/cli-plugin-babel/preset']
}
