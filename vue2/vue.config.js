const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,//这样就不会说定义了没用过，关闭语法检查
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        pathRewrite:{'^/api':''},
        ws: true,
        changeOrigin: true
      }
    }
  }
})
