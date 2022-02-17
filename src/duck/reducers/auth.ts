import { AuthState } from '../types/auth';
import * as Actions from '../actions/auth';
import { SESSION_STORAGE_LOGGED_USER } from '../../const';

const initialState: AuthState = {
    ...initialStateSetter()
};

function initialStateSetter(): AuthState {
    const user = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_LOGGED_USER) || '{}');
    return {
        isAuthenticated: !!user && Object.keys(user).length > 0,
        user: user
    };
}

function reducer(state = initialState, action: any) {
    switch (action.type) {
        case Actions.SET_IS_AUTHENTICATED:
            return setIsAuthenticated(state, action);
        case Actions.SET_LOGGED_USER:
            return setLoggedUser(state, action);
        default:
            return state;
    }
}

function setIsAuthenticated(
    state: AuthState,
    action: ReturnType<typeof Actions.setIsAuthenticated>
): AuthState {
    const newState = Object.assign({}, state);
    newState.isAuthenticated = action.isAuthenticated;
    return newState;
}

function setLoggedUser(
    state: AuthState,
    action: ReturnType<typeof Actions.setLoggedUser>
): AuthState {
    const newState = Object.assign({}, state);
    newState.user = action.user;
    return newState;
}

export default reducer;
