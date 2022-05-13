module.exports = {
  publicPath: './',
  lintOnSave: false,
  assetsDir: "assets",
  devServer: {
    // open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 8080,
    https: false,
    // hotOnly: false,
    disableHostCheck: true,
    proxy: {
      '/manager': {
        target: 'https://coredev.wksaas.net',
        changeOrigin: true,
        pathRewrite: {
          '^/manager': '' //路径重写 
        }
      }
    } //设置跨域，即将本文件内任何没有匹配到的静态文件，都指向跨域地址
  }

  // devServer: {
  //   disableHostCheck: true,
  //   proxy: {
  //     "/manager": {
  //       target: "https://coredev.wksaas.net",
  //       changeOrigin: true
  //     }
  //   }
  // },
};