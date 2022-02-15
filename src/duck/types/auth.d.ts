import { User } from '../../services/auth/types';

export type AuthState = {
    isAuthenticated: boolean;
    user?: User;
};
