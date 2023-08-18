const path = require("path");
module.exports = {
  //模式
  mode: "production",
  //入口文件 根目录为当前位置
  entry: "./src/index.ts",
  //   打包后的文件夹路径和名字 还有文件名
  output: {
    path: path.resolve(__dirname, "./JJJ"),
    filename: "fjs.js",
  },
  mode: "production",//有tree shaking效果 加上下面
  optimization:{
    useExports: true,
  }
  ,
  devServer: {
    hot: true,
    open: true,
  },
  watch: true,
  resolve: {
    alias: {
      //配置别名，extension省略后缀
      vue$: "vue/dist/vue.runtime.esm.js",
      " @": path.resolve(__dirname, "../src"),
    },
    extensions: ["*", ".js", ".json", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
  //   插件 都是new XXX（）
  plugins: [],
};
