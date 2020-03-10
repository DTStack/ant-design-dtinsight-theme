/**
 * GitHub: https://github.com/wewoor/cup/blob/HEAD/README_zh.md
 * 用于本地模拟 NGINX，测试打包的dist文件，亦或者做接口模拟操作
 * 使用：
 * > npm install -g mini-cup
 * > cup config // 按配置文件运行
 */

// const base = '/mock';

module.exports = {
    'name': 'DTinsight build test',
    'listen': 3001,
    'root': 'dist',
    'location': {
        // '/api/dataScience/service/scienceTask/getData': `${base}/res/get_res.json`
    },
    'proxyTable': {
        // '/api/dq': {
        //     target: 'http://172.16.8.104:8089',
        //     changeOrigin: true,
        //     secure: false
        // }
    }
}
