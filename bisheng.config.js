const path = require('path');
// const getWebpackConfig = require('ant-design/tools/lib/getWebpackConfig');

// const { webpack } = getWebpackConfig;
// function ignoreMomentLocale(webpackConfig) {
//     delete webpackConfig.module.noParse;
//     webpackConfig.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
//   }
  
//   function externalMoment(config) {
//     config.externals = config.externals || {};
//     config.externals['react-router-dom'] = 'ReactRouterDOM';
//     /* config.externals = Object.assign({}, config.externals, {
//         react: 'React',
//         'react-dom': 'ReactDOM',
//     }); */
//     config.externals.moment = {
//       root: 'moment',
//       commonjs2: 'moment',
//       commonjs: 'moment',
//       amd: 'moment',
//     };
//   }
const configList = [
    {
    loader: 'babel-loader',
    options: {
        // 不采用.babelrc的配置
        "babelrc": false,
        "presets": [
            ["react"],
            ["es2015", { "modules": false }]
        ],
        "plugins": [
            "syntax-dynamic-import",
            "transform-object-rest-spread",
            "transform-class-properties"
        ]
    }
},
{
    test: /\.(eot|woff|svg|ttf|woff2|gif|appcache|webp)(\?|$)/,
    loader: [
        "file-loader?name=[name].[ext]",
        "url-loader?limit=100000"
    ]
}
]
module.exports = {
    target: 'node',
    source: {
        components: './components',
        docs: './docs',
    },
    output: './dist',
    theme: './theme',
    // plugins: [new AntdDayjsWebpackPlugin()],
    htmlTemplate: path.join(__dirname, './theme/static/template.html'),
    themeConfig: {
        categoryOrder: {
            开发前必读: 0,
            theme项目开发指南: 1,
            颜色规范: 2,
            字体规范: 3,
            Components: 4,
            更新日志: 5
        },
        typeOrder: {}
    },
    lessConfig: {
        javascriptEnabled: true,
    },
    baseConfig: {
        projectName: 'DTInsight-Theme',
        homeUrl: '/docs/react/getting-started-cn'
    },
    webpackConfig: function (config) {
        // ignoreMomentLocale(config);
        // externalMoment(config);
        config.module.rules.concat(configList);
        config.optimization = {
            splitChunks: {
                chunks: "all",
                minSize: 0,
                minChunks: config.mode === 'production' ? 1 : 2,
                maxAsyncRequests: 5,
                maxInitialRequests: 8,
                automaticNameDelimiter: "~",
                name: true,
                cacheGroups: {
                    default: {
                        test: /[\\/]dt-theme[\\/]default[\\/]index.less/,
                        priority: 3
                    },
                    dark: {
                        test: /[\\/]dt-theme[\\/]dark[\\/]index.less/,
                        priority: 3
                    },
                    common: {
                        test: /[\\/]dt-theme[\\/]dt-common[\\/]index.less/,
                        priority: 3
                    }
                }
            }
        };
        return config;
    }
};