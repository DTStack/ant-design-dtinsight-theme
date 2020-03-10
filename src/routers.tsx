import * as React from 'react'
import { Route, IndexRoute } from 'react-router'

import NotFund from './components/notFund'
import Contrainer from './views/contrainer'
import LayoutPreview from './views/layout'
import TablePreview from './views/table'
export default (
    <Route path="/" component={Contrainer}>
        <IndexRoute component={LayoutPreview} />
        <Route path="/layout" component={LayoutPreview}></Route>
        <Route path="/table" component={TablePreview}></Route>
        {/* <Route path="/admin" component={SysAdmin}>
            <IndexRoute component={AdminUser} />
            <Route path="user" component={AdminUser} />
        </Route> */}
        <Route path="/*" component={NotFund} />
    </Route>
)
