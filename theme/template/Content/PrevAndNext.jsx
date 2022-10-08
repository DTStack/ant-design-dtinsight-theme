import React from 'react';
import utils from '../../utils';

export default ({ prev, next }) => {
    const isDark = Boolean(utils.getCookie('theme') === 'dark');

    return (
        <section className={isDark ? 'prev-next-nav dark' : 'prev-next-nav'}>
            {prev
                ? React.cloneElement(prev.props.children || prev.children[0], {
                      className: 'prev-page',
                  })
                : null}
            {next
                ? React.cloneElement(next.props.children || next.children[0], {
                      className: 'next-page',
                  })
                : null}
        </section>
    );
};
