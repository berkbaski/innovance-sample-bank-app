import { createStore, combineReducers } from 'redux';

import AuthReducer from './reducers/auth';

const rootReducer = combineReducers({
    auth: AuthReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer);
