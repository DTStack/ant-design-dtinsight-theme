import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { addLocaleData, IntlProvider } from 'react-intl';
import 'moment/locale/zh-cn';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import Header from './Header';
import enLocale from '../../en-US';
import cnLocale from '../../zh-CN';
import * as utils from '../utils';

import '../../dt-theme/reset.less';
import '../../dt-theme/index.less';

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
    };
  }

  getChildContext() {
    const { isMobile: mobile } = this.state;
    return { isMobile: mobile };
  }

  componentDidMount() {
    const { router } = this.context;
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

  render() {
    const { children, ...restProps } = this.props;
    const { appLocale } = this.state;

    // Temp remove SentryBoundary
    return (
      <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
        <ConfigProvider locale={appLocale.locale === 'zh-CN' ? zhCN : null}>
          <div className="page-wrapper">
            <Header {...restProps} />
            {children}
          </div>
        </ConfigProvider>
      </IntlProvider>
    );
  }
}
