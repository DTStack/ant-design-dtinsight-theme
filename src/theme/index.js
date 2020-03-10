/**
 * 自定义Antd样式文件
 */
module.exports = (basename = '/') => {
    return {
        'icon-url': `"${basename}public/iconfont/iconfont"`,
        'primary-color': '#3F87FF',
        'font-size-base': '12px',
        'text-color': '#333333',
        'border-radius-base': '2px',
        'border-color-base': '#DDDDDD',
        'success-color': '#16DE9A',
        'error-color': '#FF5F5C',
        'warning-color': '#FFB310',
        'disabled-color': '#BFBFBF',
        'disabled-bg': '#E8E8E8',
        'btn-height-sm': '28px',
        'btn-padding-horizontal-base': '16px',
        'input-placeholder-color': '#999999',
        'input-height-lg': '36px',
        'input-height-sm': '28px',
        'modal-footer-padding-horizontal': '20px',
        'form-item-margin-bottom': '20px',
        'table-header-bg': '#FAFAFA',
        'table-padding-vertical': '19px'
    };
};
