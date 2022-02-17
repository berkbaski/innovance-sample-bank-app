import { User } from '../../services/auth/types';

export const SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED';
export const SET_LOGGED_USER = 'SET_LOGGED_USER';

export const setIsAuthenticated = (isAuthenticated: boolean) => ({
    type: SET_IS_AUTHENTICATED,
    isAuthenticated
});

export const setLoggedUser = (user?: User) => ({
    type: SET_LOGGED_USER,
    user
});
