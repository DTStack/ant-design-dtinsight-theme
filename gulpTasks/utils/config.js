const { mergeRight } = require('ramda');
const { base } = require('./base');

const generalConfig = mergeRight(base, {
    plugins: [
        ...(base.plugins || []),
        { removeAttrs: { attrs: ['class', 'fill'] } }
    ]
});

module.exports = {
    generalConfig
}