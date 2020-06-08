const path = require('path');

const homeTmpl = './template/Home/index';
const contentTmpl = './template/Content/index';

function pickerGenerator(module) {
    const tester = new RegExp(`^docs/${module}`);
    return markdownData => {
        const {filename} = markdownData.meta;
        if (tester.test(filename) && !/\/demo$/.test(path.dirname(filename))) {
            return {
                meta: markdownData.meta,
            };
        }
        return null;
    };
}

module.exports = {
    lazyLoad(nodePath, nodeValue) {
        if (typeof nodeValue === 'string') {
            return true;
        }
        return nodePath.endsWith('/demo');
    },
    pick: {
        components(markdownData) {
            const {filename} = markdownData.meta;
            if (!/^components/.test(filename) || /[/\\]demo$/.test(path.dirname(filename))) {
                return null;
            }
            return {
                meta: markdownData.meta,
            };
        },
        changelog(markdownData) {
            if (/CHANGELOG/.test(markdownData.meta.filename)) {
                return {
                    meta: markdownData.meta,
                };
            }
            return null;
        },
        'docs/pattern': pickerGenerator('pattern'),
        'docs/react': pickerGenerator('react'),
        'docs/resource': pickerGenerator('resource'),
        'docs/spec': pickerGenerator('spec'),
    },
    plugins: [
        'bisheng-plugin-description',
        'bisheng-plugin-toc?maxDepth=2&keepElem',
        'bisheng-plugin-antd?injectProvider',
        'bisheng-plugin-react?lang=__react',
    ],
    routes: {
        path: '/',
        component: './template/Layout/index',
        indexRoute: {component: homeTmpl},
        childRoutes: [
            {
                path: 'index-cn',
                component: homeTmpl,
            },
            {
                path: 'docs/react/:children',
                component: contentTmpl,
            },
            {
                path: 'components/:children/',
                component: contentTmpl,
            }
        ],
    },
};
