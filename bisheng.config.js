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
        // logo: 'https://coder.slowlog.cn/images/avatar.png?v=1566195794967',
        projectName: 'DTInsight-Theme',
        homeUrl: '/docs/react/getting-started-cn'
    }
};