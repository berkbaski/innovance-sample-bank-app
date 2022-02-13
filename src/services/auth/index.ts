import { User } from './types';

export function login(username: string, password: string): Promise<User> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: '3fc70d5a-c193-4e81-9b77-8fabd0f8142c',
                username: username,
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@doe.com'
            });
        }, 500);
    });
}

export function forgotPassword(username: string): Promise<boolean> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 500);
    });
}
