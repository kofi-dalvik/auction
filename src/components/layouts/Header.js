import { memo, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';

import BoxedContent from './BoxedContent';
import {routes} from './../../pages/Router';
import { DispatchContext, StateContext } from '../../store';
import { LOGOUT } from '../../store/action-types';

function Header() {
    const {auth} = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    const history = useHistory();

    const signOut = () => {
        console.log('signout')

        dispatch({type: LOGOUT, payload: null});

        history.push(routes.login);
    }

    return (
        <header className="app-header elevation">
            <div className="top-bar elevation">
                <BoxedContent className="content">
                    <div className="logo">
                        <img src="/logo512.png" alt="Logo"/>
                    </div>
                    <div className="account">
                        <button className="user elevation" onClick={signOut}>
                            <span>Logout</span>
                            {auth.user && <img src={auth.user.image_url} alt="Profile" className="ml-2" /> }
                        </button>
                    </div>
                </BoxedContent>
            </div>

            <div className="bottom-bar">
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