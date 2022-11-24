/**
 * 将 custom-icons/iconfont-svgs 下 svg 文件的 path 拿到，写入 less 文件下
 */
const fs = require('fs');
const path = require('path');
const fileNameToClassName = require('./fileNameToClassName');
const getSpecialCssContent = require('./special');

const config = {
    fromDir: path.resolve('custom-icons/iconfont-svgs'),
    toDir: path.resolve('theme/dt-theme/default'),
    generateFileName: 'custom-icons.less',
};

const getIconCssContent = (className, pathContent) => {
    // 部分特殊的 icon 需要单独处理
    if (className === 'anticon-plus') {
        return `.anticon-plus svg {
    defs {
        display: none;
    }
    path {
        d: path("${pathContent}");
        &:nth-child(3) {
            display: none;
        }
    }
}\n
`;
    }
    return `.${className} svg path {
    &:first-child {
        d: path("${pathContent}")${className.includes('dt-') ? ' !important' : ''};
    }
    &:not(:first-child) {
        d: path("")${className.includes('dt-') ? ' !important' : ''};
    }
}\n
`;
};

fs.readdir(config.fromDir, (error, files) => {
    if (error) {
        console.log('fs.readdir error: ', error);
	} else {
        let iconCssContent = '';
        const pathContentMap = {};
        files.forEach((file)=>{
            const content = fs.readFileSync(`${config.fromDir}/${file}`, 'utf-8');
            const pathContent = content?.split(' d="')?.[1]?.split('" />')?.[0];
            const fileName = file.replace('.svg', '');
            pathContentMap[fileName] = pathContent;
            iconCssContent += getIconCssContent(fileNameToClassName[fileName] || fileName, pathContent);
        });

        const specialCssContent = getSpecialCssContent(pathContentMap);
        const cssContent = `// 此文件由 yarn generate 命令生成，请勿直接修改\n${iconCssContent}${specialCssContent}`;

        fs.writeFile(`${config.toDir}/${config.generateFileName}`, cssContent, 'utf-8', (err) => {
            if (err) {
                console.log('fs.writeFile error: ', err);
            } else {
                console.log('custom icons generate success!');
            }
        });
	}
});
