const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  // productionSourceMap: false,
  // lintOnSave: true, //是否在保存的时候检查
  // 配置 axios 代理请求
  outputDir: 'build',
  assetsDir: 'static',
  chainWebpack: config => { // 配置相对路径别名
    // 第1个参数：别名，第2个参数：路径  （设置路径别名）
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('style', resolve('./src/assets/style'))
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "./src/assets/style/sass/_variables.scss";
          @import "./src/assets/style/sass/_mixin.scss";`
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7171', // 接口的域名
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    host: 'localhost',
    port: 7070,
    open: true
  }
}
