const path = require('path')

const defaultCustomIconDir = path.resolve('./icon-svg')

module.exports = function IconSvgPlugin() {
    return {
        visitor: {
            ImportDeclaration(path, state) {
                const dirFromOpts = state.opts.iconDir
                const svgs = state.opts.svgs

                const customIconDir = dirFromOpts ? dirFromOpts : defaultCustomIconDir

                const sourceValue = path.node.source.value;
                const base = '@ant-design/icons-svg/es/asn/'
                const customSvgs = svgs.map(s => base + s)
                if (customSvgs.includes(sourceValue)) {
                    path.node.source.value = customIconDir + '/' + sourceValue.split(base)[1]
                }
            },
        },
    };
}