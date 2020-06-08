import collect from 'bisheng/collect';
import MainContent from './MainContent';
import * as utils from '../utils';


export default collect(async nextProps => {

    let {pathname} = nextProps.location;

    const pageDataPath = (pathname.indexOf('.html') > 0) ? pathname.replace('.html', '').split('/') : pathname.replace('-cn', '').split('/');

    const pageData = nextProps.utils.get(nextProps.data, pageDataPath);

    if (!pageData) {
        throw 404;
    }

    const locale = 'zh-CN';
    const pageDataPromise =
        typeof pageData === 'function'
            ? pageData()
            : (pageData[locale] || pageData.index[locale] || pageData.index)();
    const demosFetcher = nextProps.utils.get(nextProps.data, [...pageDataPath, 'demo']);
    if (demosFetcher) {
        const [localizedPageData, demos] = await Promise.all([pageDataPromise, demosFetcher()]);
        return {localizedPageData, demos};
    }

    return {localizedPageData: await pageDataPromise};
})(MainContent);
