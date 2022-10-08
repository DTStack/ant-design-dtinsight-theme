const utils = {
/**
     * 原生 JavaScript 获取 cookie 值
     * @param name
     */
    getCookie(name) {
        const arr = document.cookie.match(
            new RegExp('(^| )' + name + '=([^;]*)(;|$)')
        );
        if (arr != null) { return unescape(decodeURI(arr[2])); }
        return null;
    },

    setCookie(name, value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + value + expires + '; path=/';
    },
};

export default utils;
