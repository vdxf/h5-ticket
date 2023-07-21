const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:true,
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'https://api.daysnap.cn',
        changeOrigin: true,
        pathRewrite: {
          // '^/api': ''
        }
      },
      '/api2': {
        target: 'https://api2.daysnap.cn',
        changeOrigin: true,
        pathRewrite: {
          // '^/api': ''
        }
      },
    },
  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
})

