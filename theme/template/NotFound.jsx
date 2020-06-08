import React from 'react';
import {Link} from 'bisheng/router';
import zhCn from '../zh-CN';

export default function NotFound({location}) {

    return (
        <div id="page-404">
            <section>
                <h1>404</h1>
                <p>
                    啊哦~，您要找的页面不存在。 &nbsp;&nbsp;
                    <Link to={zhCn.messages['app.home.url']}>
                        返回首页
                    </Link>
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
