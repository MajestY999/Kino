module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/Kino/' : '/',
  outputDir: 'dist',
  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src')
      }
    }
  }
}