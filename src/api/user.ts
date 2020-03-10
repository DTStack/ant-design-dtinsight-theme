import utils from '../utils'

// import http from './http'

import { User } from '../model'

export default {
    getInitUser () {
        return this.getLoginedUser();
    },

    getLoginedUser (): User {
        const user: User = {};
        user.userName = utils.getCookie('dt_username');
        user.dtuicUserId = utils.getCookie('dt_user_id');
        user.isTenantAdmin = utils.getCookie('dt_is_tenant_admin') === 'true';
        user.isTenantCreator = utils.getCookie('dt_is_tenant_creator') === 'true';
        return user
    }

}
