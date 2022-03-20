import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { addLocaleData, IntlProvider } from 'react-intl';
import 'dayjs/locale/zh-cn';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import Header from './Header';
import enLocale from '../../en-US';
import cnLocale from '../../zh-CN';
import utils from '../../utils';
import '../../static/iconfont/iconfont.css';

// import '../../dt-theme/reset.less';
// import '../../dt-theme/index.less';

import '../../dt-theme/dt-common/index.less';
import '../../dt-theme/default/index.less';
import '../../dt-theme/dark/index.less';

if (typeof window !== 'undefined' && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => registration.unregister());
    });
}

if (typeof window !== 'undefined') {
    /* eslint-disable global-require */
    require('../../static/style');

    // Expose to iframe
    window.react = React;
    window['react-dom'] = ReactDOM;
    window.antd = require('antd');
    /* eslint-enable global-require */

    // Error log statistic
    window.addEventListener('error', function onError(e) {
        // Ignore ResizeObserver error
        if (e.message === 'ResizeObserver loop limit exceeded') {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
    });
}

let isMobile = false;


export default class Layout extends React.Component {
    static contextTypes = {
        router: PropTypes.object.isRequired,
    };

    static childContextTypes = {
        isMobile: PropTypes.bool,
    };

    constructor(props) {
        super(props);
        const appLocale = cnLocale;
        addLocaleData(appLocale.data);

        this.state = {
            appLocale,
            isMobile,
            theme: 'default'
        };
    }

    getChildContext() {
        const { isMobile: mobile } = this.state;
        return { isMobile: mobile };
    }

    componentDidMount() {
        const { router } = this.context;
        let currTheme = utils.getCookie('theme');
        if (currTheme) {
            this.setState({
                theme: currTheme
            })
        } else {
            currTheme = this.state.theme;
            utils.setCookie('theme', this.state.theme);
        }
        this.setLink(currTheme);
        router.listen(loc => {
            if (typeof window.ga !== 'undefined') {
                window.ga('send', 'pageview', loc.pathname + loc.search);
            }
            // eslint-disable-next-line
            if (typeof window._hmt !== 'undefined') {
                // eslint-disable-next-line
                window._hmt.push(['_trackPageview', loc.pathname + loc.search]);
            }
        });

        const nprogressHiddenStyle = document.getElementById('nprogress-style');
        if (nprogressHiddenStyle) {
            this.timer = setTimeout(() => {
                nprogressHiddenStyle.parentNode.removeChild(nprogressHiddenStyle);
            }, 0);
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    onThemeChange = (value) => {
        this.setState({
            theme: value
        })
        utils.setCookie('theme', value);
        // 设置link
        this.setLink(value);
    }

    setLink = (currTheme) => {
        const disableTheme = currTheme === 'dark' ? 'default' : 'dark';
        const arr = document.getElementsByTagName('link');
        for (let i = 0, len = arr.length; i < len; i++) {
            let href = arr[i].getAttribute('href');
            if (href && href.includes(disableTheme) && !href.includes('common')) {
                arr[i].disabled = true;
            }
            if (href && href.includes(currTheme) && !href.includes('common')) {
                arr[i].disabled = false;
            }
        }
    }

    render() {
        const { children, ...restProps } = this.props;
        const { appLocale, theme } = this.state;

        // Temp remove SentryBoundary
        return (
            <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
                <ConfigProvider locale={appLocale.locale === 'zh-CN' ? zhCN : null}>
                    <div className={theme === 'default' ? 'page-wrapper' : 'page-wrapper dark'} key={theme}>
                        <Header theme={theme} onThemeChange={this.onThemeChange} {...restProps} />
                        {children}
                    </div>
                </ConfigProvider>
            </IntlProvider>
        );
    }
}
