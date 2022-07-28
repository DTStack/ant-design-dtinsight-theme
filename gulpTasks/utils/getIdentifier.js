const upperFirst = require('lodash.upperfirst');
const camelCase = require('lodash.camelcase');
const { pipe } = require('ramda');

const getIdentifier = pipe(
    ({ name, themeSuffix }) =>
        name + (themeSuffix ? `-${themeSuffix}` : ''),
    camelCase,
    upperFirst
);

module.exports = {
    getIdentifier
}