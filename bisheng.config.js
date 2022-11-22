const path = require('path');
module.exports = {
    target: 'node',
    source: {
        components: './components',
        docs: './docs',
    },
    root: '/ant-design-dtinsight-theme/',
    output: './dist',
    theme: './theme',
    htmlTemplate: path.join(__dirname, './theme/static/template.html'),
    themeConfig: {
        categoryOrder: {
            介绍: 0,
            开发前必读: 1,
            theme项目开发指南: 2,
            颜色规范: 3,
            字体规范: 4,
            Components: 5,
            更新日志: 6,
        },
        typeOrder: {},
    },
    lessConfig: {
        javascriptEnabled: true,
    },
    baseConfig: {
        projectName: 'DTInsight-Theme',
        homeUrl: '/docs/react/introduce-cn',
    },
    webpackConfig: function (config) {
        config.module.rules.push({
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache|webp)(\?|$)/,
            loader: ['file-loader?name=[name].[ext]', 'url-loader?limit=100000'],
        });
        config.optimization = {
            splitChunks: {
                chunks: 'all',
                minSize: 0,
                minChunks: config.mode === 'production' ? 1 : 2,
                maxAsyncRequests: 5,
                maxInitialRequests: 8,
                automaticNameDelimiter: '~',
                name: true,
                cacheGroups: {
                    default: {
                        test: /[\\/]dt-theme[\\/]default[\\/]index.less/,
                        priority: 3,
                    },
                    dark: {
                        test: /[\\/]dt-theme[\\/]dark[\\/]index.less/,
                        priority: 3,
                    },
                    common: {
                        test: /[\\/]dt-theme[\\/]dt-common[\\/]index.less/,
                        priority: 3,
                    },
                },
            },
        };
        delete config.module.noParse;
        return config;
    },
};
