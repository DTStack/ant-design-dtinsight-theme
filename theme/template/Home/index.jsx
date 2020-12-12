import React from 'react';
import {injectIntl} from 'react-intl';
import DocumentTitle from 'react-document-title';
import PropTypes from 'prop-types';
// import Footer from '../Layout/Footer';

// To store style which is only for Home and has conflicts with others.
function getStyle() {
    return `
    .main-wrapper {
      padding: 0;
    }
    #header {
      box-shadow: none;
      width: 100%;
      padding: 0 50px;
    }
    #header,
    #header .ant-select-selection,
    #header .ant-menu {
      background: transparent;
    }
    #header #logo {
      padding: 0;
    }
    #header #nav .ant-menu-item {
      border-color: transparent;
    }
    #header #nav .ant-menu-submenu {
      border-color: transparent;
    }
    #header #nav .ant-menu-item.hide-in-home-page {
      display: none;
    }
    #header .ant-row > div:last-child .header-lang-button {
      margin-right: 0;
    }
    footer .footer-wrap {
      width: 100%;
      max-width: 1200px;
      padding: 86px 24px 93px 24px;
      margin: auto;
    }
    @media only screen and (max-width: 767.99px) {
      #footer .footer-wrap {
        padding: 40px 24px;
      }
      footer .footer-wrap .ant-row {
        padding: 0;
      }
    }
  `;
}

/* eslint-disable react/prefer-stateless-function */
class Home extends React.Component {
    static contextTypes = {
        intl: PropTypes.object.isRequired,
        isMobile: PropTypes.bool.isRequired,
    };

    render() {
        const {intl} = this.context;
        return (
            <DocumentTitle title={`${intl.formatMessage({id: 'app.name'})} - 使用说明`}>
                <div>
                    <style dangerouslySetInnerHTML={{__html: getStyle()}}/>
                    {/* eslint-disable-line */}
                    {/* <Footer/> */}
                </div>
            </DocumentTitle>
        );
    }
}

export default injectIntl(Home);
