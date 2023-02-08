import React from 'react';
import { injectIntl } from 'react-intl';
import config from '../../../bisheng.config';

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.lessLoaded = false;

        this.state = {
            color: '#1890ff',
        };
    }

    render() {
        const year = new Date().getFullYear();

        return (
            <footer id="footer">
                <div className="bottom-bar">
                    <a target="_blank" rel="noopener noreferrer" href="http://www.beian.gov.cn">
                        {config.baseConfig.projectName}
                    </a>{' '}
                    © 2020 - {year}
                </div>
            </footer>
        );
    }
}

export default injectIntl(Footer);
