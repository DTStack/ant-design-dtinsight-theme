/**
 * GitHub: https://github.com/wewoor/cup/blob/HEAD/README_zh.md
 * 用于本地模拟 NGINX，测试打包的dist文件，亦或者做接口模拟操作
 * 使用：
 * > npm install -g mini-cup
 * > cup config // 按配置文件运行
 */

module.exports = {
    name: 'DTinsight build test',
    listen: 3001,
    root: 'dist',
    location: {},
    proxyTable: {},
};
