import { useReducer } from "react";

import Router from './pages/Router';
import initialState from './store/state';
import AppState, { reducer } from './store';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppState state={state} dispatch={dispatch}>
      <Router />
    </AppState>
  );
}

export default App;
