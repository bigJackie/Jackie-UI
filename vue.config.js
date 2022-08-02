//加载path模块
const path = require("path");
//定义resolve方法，把相对路径转换成绝对路径
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  devServer: {
    open: false, // 自动启动浏览器
    host: "0.0.0.0", // localhost
    port: 8080, // 端口号
    // hotOnly: false, // 热更新

    overlay: {
      //  当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
      warnings: false,
      errors: true,
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                      @import "packages/style/index.scss";
                     `,
      },
    },
  },

  // 打包
  // publicPath: "./", // 静态资源路径（默认/，打包后会白屏）
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  outputDir: "../jui-demo", // 打包后文件的目录 （默认为dist）
  assetsDir: "static", //  outputDir的静态资源(js、css、img、fonts)目录  默认为‘’没有单独目录js/css/img在根目录中。
  productionSourceMap: false, //去除生产环境的productionSourceMap

  chainWebpack: config => {
    // config.plugin("html").tap(args => {
    //   args[0].title = "Jackie-UI";
    //   return args;
    // });

    config.resolve.alias.set("components", resolve("packages/components"));
    config.resolve.alias.set("style", resolve("packages/style"));
    config.resolve.alias.set("docs", resolve("packages/docs"));

    // vue默认@指向src目录，这里要修正为examples，另外新增一个~指向packages
    // packages和examples目录需要加入编译
    config.module
      .rule("md")
      .test(/\.md$/)
      .use("vue-loader")
      .loader("vue-loader")
      .options({
        compilerOptions: {
          preserveWhitespace: false,
        },
      })
      .end()
      .use("md-loader")
      .loader(path.resolve(__dirname, "./packages/utils/md-loader/index.js"))
      .end();

    config.module
      .rule("js")
      .include.add(/packages/)
      .end()
      .include.add(/src/)
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        // 修改它的选项...
        return options;
      });
  },
};
