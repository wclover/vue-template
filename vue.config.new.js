module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/vue_workspac/aihuhuproject/' : '/',

  //基本路径 默认的'/'是绝对路径，如果不确定在根路径，改成相对路径'./'
  publicPath: './',

  // 输出文件目录
  outputDir: 'dist',

  // 静态资源输出文件目录
  assetsDir:'static',

  // html输出文件
  indexPath:'index.html',

  // eslint-loader 是否在保存的时候检查 有效的值：`ture` | `false` | `"error"`  当设置为 `"error"` 时，检查出的错误会触发编译失败。
  // lintOnSave: process.env.NODE_ENV === 'development',
  lintOnSave: true,

  // 生产环境是否生成 sourceMap 文件，方便报错时找到源代码位置(没进行压缩的文件)
  productionSourceMap: false,

  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
  },

  // webpack-dev-server 相关配置
  devServer: {
    // 自动打开浏览器
    open: false,
    // ip地址，默认是localhost
    host: '0.0.0.0',
    // 端口号
    port: 8080,
    // 是否使用热更新，devServer的默认行为是在发现源代码被变更后，通过自动刷新整个页面来做到事实预览，开启hot后，将在不刷新整个页面的情况下通过新模块替换老模块来做到实时预览。
    hot:true,
    https: false,
    // hot 和 hotOnly 的区别是在某些模块不支持热更新的情况下，前者会自动刷新页面，后者不会刷新页面，而是在控制台输出热更新失败
    hotOnly: false,
    // 开发环境下接口的代理
    proxy: {
      '/': {
        // 目标的接口的域名
        target: 'http://xxxx:8080',
        secure: false, //false为http访问，true为https访问
        // 是否允许跨域
        changeOrigin: true,
        pathRewrite: {
          '^/': '/' //重写接口
        }
      }
    }, // 设置代理
    before: app => {}
  },

  // 第三方插件配置
  pluginOptions: {
    // ...
  }
};
