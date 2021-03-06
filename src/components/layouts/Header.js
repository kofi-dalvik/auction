import { memo, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';

import BoxedContent from './BoxedContent';
import {routes} from './../../pages/Router';
import { DispatchContext, StateContext } from '../../store';
import { LOGOUT } from '../../store/action-types';
import { logout } from '../../adapters/authentication';
import { Button } from '../index';

function Header() {
    const {auth} = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    const history = useHistory();

    const signOut = () => {
        logout().catch(() => null);

        dispatch({ type: LOGOUT, payload: null });

        history.push(routes.login);
    }

    return (
        <header className="app-header elevation">
            <div className="top-bar elevation pl-3 pr-3">
                <BoxedContent className="content">
                    <div className="logo">
                        <img src="/logo512.png" alt="Logo"/>
                    </div>
                    <div className="account">
                        <Button
                            raw
                            onClick={signOut}
                            className="user elevation"
                            icon={<span>Logout</span>}
                            label={auth.user && <img src={auth.user.image_url} alt="Profile" className="ml-2" />}
                        />
                    </div>
                </BoxedContent>
            </div>

            <div className="bottom-bar pl-3 pr-3">
                <BoxedContent className="v-stretch content">
                    <NavLink to={routes.home} activeClassName="active">
                        <AiOutlineHome className="icon" /> Home
                    </NavLink>

                    <NavLink to={routes.settings} activeClassName="active">
                        <AiOutlineSetting className="icon" /> Bid Settings
                    </NavLink>
                </BoxedContent>
            </div>
        </header>
    )
}

export default memo(Header);