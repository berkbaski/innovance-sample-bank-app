import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AuthLayout from '../../layouts/AuthLayout';
import styles from './index.module.css';
import i18n from '../../i18n';
import {
    Form,
    Input,
    Button,
    TextButton,
    TextButtonGroup
} from '../../components';
import { login } from '../../services/auth';
import { setIsAuthenticated, setLoggedUser } from '../../duck/actions/auth';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { LOCAL_STORAGE_LOGGED_USER } from '../../const';

const Login = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [localStorageUser, setLocalStorageUser] = useLocalStorage(
        LOCAL_STORAGE_LOGGED_USER
    );

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!username || !password) {
            setError(true);
            return;
        }

        login(username, password)
            .then((user) => {
                dispatch(setLoggedUser(user));
                dispatch(setIsAuthenticated(true));
                setLocalStorageUser(user);
                navigate('/');
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <AuthLayout>
            <h1 className={styles.authFormTitle}>Login</h1>
            <p className={styles.authFormSubtitle}>
                {i18n.t('enterYourCredentials')}
            </p>

            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder={i18n.t('usernameOrEmail')}
                    className="mb-2"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder={i18n.t('password')}
                    className="mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                    <h5 className="error">
                        {i18n.t('requiredFieldsMustBeFilled')}
                    </h5>
                )}
                <Button className="mb-4">{i18n.t('login')}</Button>
                <hr className="mb-4" />
                <TextButtonGroup>
                    <TextButton>
                        {i18n.t('dontHaveAnAccount') + ' '}
                        <b>
                            <Link to="/register">{i18n.t('register')}</Link>
                        </b>
                    </TextButton>
                    <TextButton>
                        {i18n.t('forgotYourPassword') + ' '}
                        <b>
                            <Link to="/forgot-password">{i18n.t('reset')}</Link>
                        </b>
                    </TextButton>
                </TextButtonGroup>
            </Form>
        </AuthLayout>
    );
};

export default Login;
