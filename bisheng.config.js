const path = require('path');

module.exports = {
    source: {
        components: './components',
        docs: './docs',
    },
    output: './dist',
    theme: './theme',
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
        config.module.rules.push({
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache|webp)(\?|$)/,
            loader: [
                "file-loader?name=[name].[ext]",
                "url-loader?limit=100000"
            ]
        });
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
                        test: /[\\/]dt-theme[\\/]common[\\/]index.less/,
                        priority: 3
                    }
                }
            }
        };
        return config;
    }
};