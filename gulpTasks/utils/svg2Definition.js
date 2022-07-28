const { createTransformStream } = require('./creator');
const {
    pipe,
    clone,
    map,
    filter,
    where,
    equals,
    gt: greaterThan,
    both,
    unless,
    length,
    dissoc: deleteProp,
    reduce,
    path: get,
    __,
    applyTo,
    defaultTo,
    objOf,
    assoc
} = require('ramda');
const parseXML = require('@rgrove/parse-xml');

// SVG => IconDefinition
const svg2Definition = ({ theme, extraNodeTransformFactories, stringify }) =>
    createTransformStream((SVGString, { stem: name }) =>
        applyTo(SVGString)(
            pipe(
                parseXML,
                pipe(
                    get(['children', 0]),
                    defaultTo({})
                ),
                element2AbstractNode({
                    name,
                    theme,
                    extraNodeTransformFactories
                }),
                pipe(objOf('icon'), assoc('name', name), assoc('theme', theme)),
                defaultTo(JSON.stringify)(stringify)
            )
        )
    );

function element2AbstractNode({ name, theme, extraNodeTransformFactories }) {
    return ({ name: tag, attributes, children }) =>
        applyTo(extraNodeTransformFactories)(
            pipe(
                map((factory) => factory({ name, theme })),
                reduce((transformedNode, extraTransformFn) => extraTransformFn(transformedNode),
                    applyTo({
                        tag,
                        attrs: clone(attributes),
                        children: applyTo(children)(
                            pipe(
                                filter(where({ type: equals('element') })),
                                map(
                                    element2AbstractNode({
                                        name,
                                        theme,
                                        extraNodeTransformFactories
                                    })
                                )
                            )
                        )
                    })(unless(where({ children: both(Array.isArray, pipe(length, greaterThan(__, 0))) }), deleteProp('children')))
                )
            )
        );
}

module.exports = {
    svg2Definition
}