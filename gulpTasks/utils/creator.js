const through = require('through2');

const createTransformStream = (fn) =>
    through.obj((file, encoding, done) => {
        if (file.isBuffer()) {
            const before = file.contents.toString(encoding);
            try {
                const after = fn(before, file);
                file.contents = Buffer.from(after);
                done(null, file);
            } catch (err) {
                done(err, null);
            }
        } else {
            done(null, file);
        }
    });

const createTransformStreamAsync = (
    fn
) =>
    through.obj((file, encoding, done) => {
        if (file.isBuffer()) {
            const before = file.contents.toString(encoding);
            fn(before, file)
                .then((after) => {
                    file.contents = Buffer.from(after);
                    done(null, file);
                })
                .catch((err) => {
                    done(err, null);
                });
        } else {
            done(null, file);
        }
    });

module.exports = {
    createTransformStream,
    createTransformStreamAsync,
}