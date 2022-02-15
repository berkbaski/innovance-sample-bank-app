import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthLayout from '../../layouts/AuthLayout';
import styles from './index.module.css';
import i18n from '../../i18n';
import { Form, Input, Button } from '../../components';
import { forgotPassword } from '../../services/auth';

const ForgotPassword = () => {
    const [username, setUsername] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!username) {
            setError(true);
            return;
        }

        forgotPassword(username)
            .then(() => {
                alert(i18n.t('forgotPasswordSuccess'));
                navigate('/');
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <AuthLayout>
            <h1 className={styles.authFormTitle}>{i18n.t('forgotPassword')}</h1>
            <p className={styles.authFormSubtitle}>
                {i18n.t('pleaseEnterYourEmail')}
            </p>

            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder={i18n.t('usernameOrEmail')}
                    className="mb-4"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {error && (
                    <h5 className="error">
                        {i18n.t('requiredFieldsMustBeFilled')}
                    </h5>
                )}
                <Button className="mb-4">{i18n.t('forgotPassword')}</Button>
            </Form>
        </AuthLayout>
    );
};

export default ForgotPassword;
