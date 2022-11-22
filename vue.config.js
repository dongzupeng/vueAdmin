const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const resolve = (dir) => path.resolve(__dirname, dir);
// 打包分析
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isProd = process.env.NODE_ENV === 'production';
const { Echarts, VueCDN, AxiosCDN, VueRouterCDN, VuexCDN } = require('./src/plugins/cdn');
const cdn = {
  css: [],
  js: [Echarts, VueCDN, AxiosCDN, VueRouterCDN, VuexCDN],
  externals: {
    'echarts': "Echarts",
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'axios': 'axios'
  }
};

module.exports = {
  publicPath: "/vueAdmin/",
  chainWebpack: (config) => {
    // 配置svg
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons/svg'))       //注意svg的存储地址
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons/svg'))        //注意svg的存储地址
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  configureWebpack: (config) => {
    if (isProd) {
      // 为生产环境修改配置
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true, //生产环境自动删除console
            },
            warnings: false,
          },
          sourceMap: false,
          parallel: true, //使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
        })
      );
      //配置插件
      config.plugins.push(new BundleAnalyzerPlugin());
    }
  },
  configureWebpack: {
    externals: isProd ? cdn.externals : {}
  },
  css: {
    loaderOptions: {
      less: {
        // 添加全局less
        // prependData: `@import "~@/assets/scss/comm.scss";`,
      },
    },
  },
  lintOnSave: process.env.NODE_ENV !== "production",
  // 配置代理
  devServer: {
    open: true, // 是否打开浏览
    host:"localhost",
    port: 9999,      //启动端口号
    https: false,    //是否开启https
    // proxy: {
    //   "/api": {
    //     target: "https://api.apiopen.top",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/api": "",
    //     },
    //   },
    // },
  },
};

