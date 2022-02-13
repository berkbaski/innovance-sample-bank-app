import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import AuthLayout from '../../layouts/AuthLayout';
import styles from './index.module.css';
import i18n from '../../i18n';
import { Form, Input, TextButton, TextButtonGroup } from '../../components';
import Button from '../../components/button';

type Inputs = {
    username: string;
    password: string;
};

const Login = () => {
    return (
        <AuthLayout>
            <h1 className={styles.authFormTitle}>Login</h1>
            <p className={styles.authFormSubtitle}>
                {i18n.t('enterYourCredentials')}
            </p>

            <Form>
                <Input
                    type="text"
                    placeholder={i18n.t('usernameOrEmail')}
                    className="mb-2"
                />
                <Input
                    type="password"
                    placeholder={i18n.t('password')}
                    className="mb-4"
                />
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
