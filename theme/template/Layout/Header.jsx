import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'bisheng/router';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { AutoComplete, Row, Col, Radio } from 'antd';
import config from '../../../bisheng.config';
import * as utils from '../utils';

const Option = AutoComplete.Option;
const searchEngine = 'Google';
const searchLink = 'https://www.google.com/#q=site:ant.design+';

export default class Header extends React.Component {
    static contextTypes = {
        router: PropTypes.object.isRequired,
        intl: PropTypes.object.isRequired,
        isMobile: PropTypes.bool.isRequired,
    };

    state = {
        inputValue: '',
        menuVisible: false
    };

    componentDidMount() {
        const { intl, router } = this.context;
        router.listen(this.handleHideMenu);
        const { searchInput } = this;
        document.addEventListener('keyup', event => {
            if (event.keyCode === 83 && event.target === document.body) {
                searchInput.focus();
            }
        });
    }

    handleSearch = (value) => {
        if (value === searchEngine) {
            window.location.href = `${searchLink}${this.state.inputValue}`;
            return;
        }

        const { intl, router } = this.context;
        this.setState({
            inputValue: '',
        }, () => {
            router.push({ pathname: utils.getLocalizedPathname(`${value}/`, intl.locale === 'zh-CN') });
            document.querySelector('#search-box .ant-select-search__field').blur();
        });
    }

    handleInputChange = (value) => {
        this.setState({
            inputValue: value,
        });
    }

    handleSelectFilter = (value, option) => {
        const optionValue = option.props['data-label'];
        return optionValue === searchEngine ||
            optionValue.indexOf(value.toLowerCase()) > -1;
    }

    handleHideMenu = () => {
        this.setState({
            menuVisible: false,
        });
    };

    handleThemeChange = (e) => {
        this.props.onThemeChange(e.target.value);
    }

    render() {
        const { inputValue, menuMode } = this.state;
        const { picked, theme } = this.props;
        const components = picked.components;
        const locale = this.context.intl.locale;
        const isZhCN = locale === 'zh-CN';
        const excludedSuffix = isZhCN ? 'en-US.md' : 'zh-CN.md';
        const options = components
            .filter(({ meta }) => !meta.filename.endsWith(excludedSuffix))
            .map(({ meta }) => {
                const pathSnippet = meta.filename.split('/')[1];
                const url = `/components/${pathSnippet}`;
                const subtitle = meta.subtitle;
                return (
                    <Option value={url} key={url} data-label={`${meta.title.toLowerCase()} ${subtitle || ''}`}>
                        <strong>{meta.title}</strong>
                        {subtitle && <span className="ant-component-decs">{subtitle}</span>}
                    </Option>
                );
            });

        const headerClassName = classNames({
            clearfix: true,
        });

        const searchPlaceholder = locale === 'zh-CN' ? '搜索组件...' : 'Search Components...';
        const isDark = Boolean(theme === 'dark');

        return (
            <header id="header" style={isDark ? { background: '#080A1A', boxShadow: '0px -2px 8px #272A40' } : {}} className={headerClassName}>
                <Row>
                    <Col xxl={4} xl={5} lg={5} md={5} sm={24} xs={24}>
                        <Link to={config.baseConfig.homeUrl} id="logo">
                            {/* <img alt="logo" src={config.baseConfig.logo}/> */}
                            <span style={{ fontSize: '18px' }}>{config.baseConfig.projectName}</span>
                        </Link>
                    </Col>
                    <Col lg={10} md={10} sm={24} xs={24}>
                        <div id="search-box" style={isDark ? { borderLeftColor: '#272A40' } : {}}>
                            <AutoComplete
                                value={inputValue}
                                dropdownClassName="component-select"
                                placeholder={searchPlaceholder}
                                optionLabelProp="data-label"
                                filterOption={this.handleSelectFilter}
                                onSelect={this.handleSearch}
                                onSearch={this.handleInputChange}
                                getPopupContainer={trigger => trigger.parentNode}
                            >
                                <Option value={searchEngine} data-label={searchEngine}>
                                    <FormattedMessage id="app.header.search" />
                                </Option>
                                {options}
                            </AutoComplete>
                        </div>
                        {menuMode === 'horizontal' ? menu : null}
                    </Col>
                    <Col className="theme-radio-box" style={isDark ? { color: 'rgba(255, 255, 255, 0.65)' } : {}}>
                        当前主题：
                        <Radio.Group onChange={this.handleThemeChange} value={theme}>
                            <Radio value={'default'}>默认</Radio>
                            <Radio value={'dark'}>暗黑</Radio>
                        </Radio.Group>
                    </Col>
                </Row>
            </header>
        );
    }
}
