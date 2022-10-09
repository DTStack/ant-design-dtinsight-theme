const {
    evolve,
    clone,
    pipe,
    mergeLeft,
    when,
    equals,
    where,
    mergeRight,
} = require('ramda');

function assignAttrsAtTag(
    tag,
    extraPropsOrFn
) {
    return (options) => (asn) =>
        when(
        where({
            tag: equals(tag),
        }),
            evolve({
                attrs: pipe(
                clone,
                    mergeLeft(
                        typeof extraPropsOrFn === 'function'
                            ? extraPropsOrFn(
                            mergeRight(options, { previousAttrs: asn.attrs })
                            )
                            : extraPropsOrFn
                    )
            ),
})
)(asn);
}

module.exports = {
    assignAttrsAtTag,
};
