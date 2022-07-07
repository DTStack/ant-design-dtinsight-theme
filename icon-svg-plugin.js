const fs = require('fs')
const path = require('path')

const data = fs.readdirSync('./icon-svg')
console.log('data', data)
const svgs = data.map(s => s.split('.js')[0])
const customIconDir = path.resolve('./icon-svg') + '/'
console.log('*** customIconDir', customIconDir)

module.exports = function IconSvgPlugin() {
    return {
        visitor: {
            ImportDeclaration(path) {
                const sourceValue = path.node.source.value;
                const base = '@ant-design/icons-svg/es/asn/'
                const customSvgs = svgs.map(s => base + s)
                if (customSvgs.includes(sourceValue)) {
                    console.log('*** sourceValue', sourceValue)
                    path.node.source.value = customIconDir + sourceValue.split(base)[1]
                    console.log('*** replaced', path.node.source.value)
                }
            },
        },
    };
}