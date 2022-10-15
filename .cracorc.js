const CracoVtkPlugin = require("craco-vtk");
const CracoLessPlugin = require("craco-less");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");
const webpack = require("webpack");
const { whenProd } = require("@craco/craco");
const path = require("path");
const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);
module.exports = {
  webpack: {
    // 别名
    alias: {
      "@@": pathResolve("."),
      "@": pathResolve("src"),
      "@assets": pathResolve("src/assets"),
      "@common": pathResolve("src/common"),
      "@components": pathResolve("src/components"),
      "@utils": pathResolve("src/utils"),
      "@adapters": pathResolve("src/adapters"),
      "@ui/": pathResolve("src/ui"),
      "@store": pathResolve("src/services/store"),
      "@api": pathResolve("src/services/api"),
      "@machineFactory": pathResolve("src/services/machineFactory"),
      "@mock": pathResolve("src/services/mock"),
      "@types": pathResolve("src/types"),
      "@application": pathResolve("src/application"),
      "@domain": pathResolve("src/domain"),
    },
    plugins: [
      //打包分析
      ...whenProd(
        () => [
          new BundleAnalyzerPlugin({
            analyzerPort: 1000,
            openAnalyzer: false,
          }),
        ],
        []
      ),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new SimpleProgressWebpackPlugin(),
    ],
    //抽离公用模块
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: "initial",
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
          },
          vendor: {
            test: /node_modules/,
            chunks: "initial",
            name: "vendor",
            priority: 10,
            enforce: true,
          },
        },
      },
    },
  },
  babel: {
    plugins: [
      ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }],
      // ['@babel/plugin-proposal-decorators', { legacy: true }]
    ],
  },
  plugins: [
    {
      plugin: CracoVtkPlugin(),
    },
    {
      plugin: CracoLessPlugin,
      options: {
        // 此处根据 less-loader 版本的不同会有不同的配置，详见 less-loader 官方文档
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
