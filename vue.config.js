const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const resolve = (dir) => path.resolve(__dirname, dir);
// 打包分析
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isProd = process.env.NODE_ENV === 'production';
//配置引用cdn的js、css地址
const cdn = {
  // css: [
  //   'https://unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css'
  // ],
  js: [
    'https://cdn.bootcdn.net/ajax/libs/vue/2.6.10/vue.min.js',
    'https://cdn.bootcdn.net/ajax/libs/vue-router/3.0.2/vue-router.min.js',
    'https://cdn.bootcdn.net/ajax/libs/vuex/3.1.0/vuex.min.js',
    'https://cdn.bootcdn.net/ajax/libs/axios/0.18.1/axios.min.js',
    'https://unpkg.com/element-ui@2.13.2/lib/index.js',
    'https://cdn.bootcdn.net/ajax/libs/echarts/5.0.1/echarts.min.js'
  ]
}

const externals = {
  // 属性名称 vue, 表示遇到 import xxx from 'vue' 这类引入 'vue'的，不去 node_modules 中找，而是去找全局变量 Vue（其他的为VueRouter、Vuex、axios、ELEMENT、echarts，注意全局变量是一个确定的值，不能修改为其他值，修改为其他大小写或者其他值会报错，若有异议可留言）
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  axios: 'axios',
  'element-ui': 'ELEMENT',
  'echarts': 'echarts'
}


module.exports = {
  publicPath: "/vueAdmin/",
  chainWebpack: (config) => {
    //cdn
    if (isProd) {
      config.plugin('html').tap(args => {
        args[0].cdn = cdn
        return args
      })
      //视为一个外部库，而不将它打包进来
      config.externals(externals)
    }
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
  css: {
    loaderOptions: {
      less: {
        // 添加全局less
        // prependData: `@import "~@/assets/scss/comm.scss";`,
      },
    },
  },
  lintOnSave: !isProd,
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

