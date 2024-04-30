import React from 'react';
import { Link } from 'bisheng/router';
import config from '../../bisheng.config';

export default function NotFound({ location: _location }) {
    return (
        <div id="page-404">
            <section>
                <h1>404</h1>
                <p>
                    啊哦~，您要找的页面不存在。 &nbsp;&nbsp;
                    <Link to={config.baseConfig.homeUrl}>返回首页</Link>
                </p>
            </section>
            <style
                dangerouslySetInnerHTML={{
                    __html: '#react-content { height: 100%; background-color: #fff }',
                }}
            />
        </div>
    );
}
