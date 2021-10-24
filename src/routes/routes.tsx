import React, {FC, lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Spin} from 'antd';


const routes = [{
    path: '/',
    component: lazy(() => import('../pages/News')),
    exact: true
}, {
    path: '/bookmarks',
    component: lazy(() => import('../pages/Bookmarks')),
    exact: true
}];

const Routes: FC = () => (
    <Switch>
        <Suspense fallback={<Spin spinning={true}/>}>
            {routes.map(({component, path, exact}) =>
                <Route
                    path={path}
                    key={path}
                    exact={exact}
                    component={component}
                />
            )}
        </Suspense>
    </Switch>
);

export default Routes;