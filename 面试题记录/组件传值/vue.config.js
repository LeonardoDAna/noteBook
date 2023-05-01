// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
const path = require("path");
const port = 9528; // dev port
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({ //这里是配置项，详见官方文档
            rootValue: 16, // 换算的基数
            // selectorBlackList: ['weui','mu'], // 忽略转换正则匹配项
            propList: ['*'],
          }),
        ]
      }
    },
  },
  publicPath: "./",
  outputDir: "dist",
  // proxyTable: {
  //   "/api": {
  //     target: "https://test-mcapi.supor.com",
  //     secure: false,
  //     changeOrigin: true,
  //     pathRewrite: {
  //       "^/api": ""
  //     }
  //   }
  // },
  devServer: {
    // host: '0.0.0.0',
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: false
    },
    // proxy: 'https://test-mcapi.supor.com'
    proxy: {
      // change xxx-api/login => mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API_U_CENTER]: {
        target: `https://test-mcapi.supor.com`,
        // target: `https://mcapi.supor.com`,
        ws: true, // proxy websockets
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API_U_CENTER]: ""
        }
      }
    },
    // after: require("./mock/mock-server.js")
  },
  // dev: {
  //   assetsSubDirectory: 'static',
  //   assetsPublicPath: '/',
  //   proxyTable: {
  //     '/api': {
  //       target: 'http://localhost:8443', //后期可以改
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }, //配置跨域支持
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    // name: name,
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  },
}