const fs = require('fs');
const path = require('path');

const { series } = require('gulp');

const { genIcons } = require('./gulpTasks/genIcons');
const { generalConfig } = require('./gulpTasks/utils/config');
const { assignAttrsAtTag } = require('./gulpTasks/utils/assignAttrsAtTag');
const { adjustViewBox } = require('./gulpTasks/utils/adjustViewBox');
const { getIdentifier } = require('./gulpTasks/utils/getIdentifier');
const config = require('./customIcon.config.js');

const iconTemplate = `
const <%= identifier %> = <%= content %>;

export default <%= identifier %>;
`;

const generateIcons = genIcons({
    theme: 'outlined',
    from: config.from,
    toDir: config.toDir,
    svgoConfig: generalConfig,
    extraNodeTransformFactories: [assignAttrsAtTag('svg', { focusable: 'false' }), adjustViewBox],
    stringify: JSON.stringify,
    template: iconTemplate,
    mapToInterpolate: ({ name, content }) => ({
        identifier: getIdentifier({ name }),
        content,
    }),
    filename: ({ name }) => getIdentifier({ name }),
});

const generateIconNameList = function (callback) {
    const data = fs.readdirSync(config.toDir);
    const svgs = data.map((s) => `'${s.split('.js')[0]}'`);
    const listString = svgs.join(', ');
    const template = `const list = [${listString}];\n\nmodule.exports = { list };\n`;

    fs.writeFileSync(path.resolve(config.toDir, 'list.js'), template);
    callback();
};

exports.default = series(generateIcons, generateIconNameList);
