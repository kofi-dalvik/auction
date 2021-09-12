import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
import Settings from './Settings';
import ItemDetail from './ItemDetail';

export const routes = {
    home: '/home',
    login: `/login`,
    settings: '/settings',
    itemDetail: '/items/:item_id',
}

function Router() {
    const {home, login, settings, itemDetail} = routes;

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to={login} />
                </Route>

                <Route exact path={login}>
                    <Login />
                </Route>

                <Route exact path={home}>
                    <Home />
                </Route>

                <Route exact path={itemDetail}>
                    <ItemDetail />
                </Route>

                <Route exact path={settings}>
                    <Settings />
                </Route>

                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;