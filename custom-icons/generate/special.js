/**
 * Notification, Modal, Message, Popover, Popconfirm 的 Dom 与 className="root" 同级，所以单独处理，Alert 下的图标需要单独处理
 */
const fileNameToClassName = {
    CheckCircleFilled: 'anticon-check-circle',
    ExclamationCircleFilled: ['anticon-info-circle'],
    WarningFilled: 'anticon-exclamation-circle',
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

    return `.ant-notification, .ant-modal-root, .ant-message, .ant-popover, .ant-alert {${cssContent}
}
`;
};
