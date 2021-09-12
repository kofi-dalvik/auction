import { createContext } from "react";
import PropTypes from "prop-types";

import actions from './actions';

// Set up state and dispatcher contexts
export const StateContext = createContext();
export const DispatchContext = createContext();

// Reducer
export const reducer = (state, action) => {
    const { type, payload } = action;

    if (typeof actions[type] === 'function') {
        return actions[type](state, payload);
    }

    return state;
};

function AppState(props) {
    const { state, dispatch } = props;

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                { props.children }
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}

AppState.propTypes = {
    state: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.node
};

export default AppState;