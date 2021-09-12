import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';

import BoxedContent from './BoxedContent';
import {routes} from './../../pages/Router';

function Header() {
    return (
        <header className="app-header elevation">
            <div className="top-bar elevation">
                <BoxedContent className="content">
                    <div className="logo">
                        <img src="/logo512.png" alt="Logo"/>
                    </div>
                    <div className="account">
                        <button className="user elevation">
                            <span>username</span>
                            <img src="/logo512.png" alt="Profile" className="ml-2" />
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

export default Header;