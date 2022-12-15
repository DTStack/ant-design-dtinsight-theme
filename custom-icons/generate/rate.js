/**
 * Rate 下的星星为实心，需要单独处理
 */
const fileNameToClassName = {
    StarFilled: 'anticon-star',
};

const getName = (value) => {
    if (Array.isArray(value)) {
        let str = '';
        value.forEach((item, idx) => str += `.${item} svg path${(idx !== (value.length - 1)) ? ', ' : ''}`);
        return str;
    } else {
        return `.${value} svg path`;
    }
};

module.exports = (pathContentMap) => {
    let cssContent = '';
    Object.keys(fileNameToClassName).forEach(item => {
        cssContent += `
        ${getName(fileNameToClassName[item])} {
            &:first-child {
                d: path("${pathContentMap[item]}");
            }
            &:not(:first-child) {
                d: path("");
            }
        }`;
    });

    return `.ant-rate-star {
    .ant-rate-star-first, .ant-rate-star-second {${cssContent}
    }
}
`;
};
