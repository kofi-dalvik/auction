import { useState, useContext } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import { DispatchContext, StateContext } from './../store';
import { login } from '../adapters/authentication';
import {SET_AUTH_USER} from '../store/action-types';
import {routes}  from './Router';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history =  useHistory();
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    if (state.auth.isLoggedIn) {
        return <Redirect to={routes.home}/>
    }

    const submit = (e) => {
        e.preventDefault();

        login({username, password})
        .then(response => {
            dispatch({
                type: SET_AUTH_USER,
                payload: {...response}
            });

            history.push(routes.home);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-lg-4 col-md-6 col-sm-8 col-12">
                <div className="login-page elevation rounded">
                    <div className="text-center mb-5 title">
                        <h1 className="text-white">Scopic Test</h1>
                        <hr/>
                        <h4 className="font-big text-white">Login to Your Account</h4>
                        <p className="m-0 text-muted">Start bidding for free</p>
                    </div>

                    <form className="" onSubmit={submit}>
                        <div className="form-group elevation mb-4">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder=".e.g johndoe"
                            />
                        </div>

                        <div className="form-group elevation mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder=".e.g secret" />
                        </div>

                        <div className="mt-4 d-flex justify-content-between">
                            <label>
                                <input type="checkbox"/> Remember
                            </label>
                            <span>Forgot Password?</span>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mt-4 font-small">Login to Your Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
