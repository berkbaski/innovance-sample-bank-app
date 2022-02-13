import { AuthState } from '../types/auth';
import * as Actions from '../actions/auth';
import { LOCAL_STORAGE_LOGGED_USER } from '../../const';

const initialState: AuthState = {
    ...initialStateSetter()
};

function initialStateSetter(): AuthState {
    const user = localStorage.getItem(LOCAL_STORAGE_LOGGED_USER);
    return {
        isAuthenticated: !!user,
        user: user ? JSON.parse(user) : undefined
    };
}

export default function (state = initialState, action: any) {
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
