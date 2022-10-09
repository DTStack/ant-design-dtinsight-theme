const { createTransformStream } = require('./creator');
const template = require('lodash.template');

const useTemplate = ({ template: tplContent, mapToInterpolate }) => {
    const executor = template(tplContent);
    return createTransformStream((content, { stem: name, path }) =>
        executor(mapToInterpolate({ name, content, path }))
    );
};

module.exports = {
    useTemplate,
};
