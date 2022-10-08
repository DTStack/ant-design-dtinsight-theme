module.exports = {
    extends: [require.resolve('ko-lint-config/.stylelintrc')],
    overrides: [
        {
            files: ['**/*.less'],
            customSyntax: 'postcss-less',
        },
    ],
    rules: {
        'at-rule-name-case': null, // less 中变量名的大小写
        'selector-no-vendor-prefix': null, // 兼容写法
        'property-no-vendor-prefix': null, // 兼容写法
        'selector-pseudo-class-no-unknown': null, // 兼容写法
        'selector-type-no-unknown': null, // 兼容写法
        'number-max-precision': 10, // 数字中允许的小数位数
    },
};
