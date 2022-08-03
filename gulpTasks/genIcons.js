const { src, dest } = require('gulp')
const SVGO = require('svgo')
const rename = require('gulp-rename')

const { createTransformStreamAsync } = require('./utils/creator')
const { svg2Definition } = require('./utils/svg2Definition')
const { useTemplate } = require('./utils/useTemplate')

const svgo = (options) => {
    const optimizer = new SVGO(options);
    return createTransformStreamAsync(async (before) => {
        const { data } = await optimizer.optimize(before);
        return data;
    });
};

const genIcons = (options) => {
    const {
        from, toDir, svgoConfig,
        theme, extraNodeTransformFactories, stringify,
        template, mapToInterpolate, filename
    } = options
    return function GenerateIcons() {
        return src(from)
            .pipe(svgo(svgoConfig))
            .pipe(
                svg2Definition({
                    theme,
                    extraNodeTransformFactories,
                    stringify
                })
            )
            .pipe(useTemplate({template, mapToInterpolate}))
            .pipe(
                rename((parsedPath) => {
                    if (parsedPath.basename) {
                        parsedPath.basename = filename({name: parsedPath.basename});
                        parsedPath.extname = '.js';
                    }
                })
            )
            .pipe(dest(toDir));
    };
}

module.exports = {
    svgo,
    genIcons,
}