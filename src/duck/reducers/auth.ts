import { AuthState } from '../types/auth';
import * as Actions from '../actions/auth';

const initialState: AuthState = {
    isAuthenticated: false
};

export default function (state = initialState, action: any) {
    switch (action.type) {
        case Actions.SET_IS_AUTHENTICATED:
            return setIsAuthenticated(state, action);
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
