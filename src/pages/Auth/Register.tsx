import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthLayout from '../../layouts/AuthLayout';
import styles from './index.module.css';
import i18n from '../../i18n';
import { Form, Input, Button } from '../../components';
import { register } from '../../services/auth';

type RegisterInputs = {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

const Login = () => {
    const [formData, setFormData] = useState<RegisterInputs>({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { username, firstName, lastName, email, password } = formData;
        if (!username || !firstName || !lastName || !email || !password) {
            setError(true);
            return;
        }

        register(formData)
            .then(() => {
                alert(i18n.t('weSentAnEmailForConfirmation'));
                navigate('/');
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <AuthLayout>
            <h1 className={styles.authFormTitle}>{i18n.t('register')}</h1>
            <p className={styles.authFormSubtitle}>{i18n.t('enterYourInfo')}</p>

            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder={i18n.t('username')}
                    className="mb-2"
                    value={formData.username}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            username: e.target.value
                        })
                    }
                />
                <Input
                    type="text"
                    placeholder={i18n.t('firstName')}
                    className="mb-2"
                    value={formData.firstName}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            firstName: e.target.value
                        })
                    }
                />
                <Input
                    type="text"
                    placeholder={i18n.t('lastName')}
                    className="mb-2"
                    value={formData.lastName}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            lastName: e.target.value
                        })
                    }
                />
                <Input
                    type="email"
                    placeholder={i18n.t('email')}
                    className="mb-2"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            email: e.target.value
                        })
                    }
                />
                <Input
                    type="password"
                    placeholder={i18n.t('password')}
                    className="mb-4"
                    value={formData.password}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            password: e.target.value
                        })
                    }
                />
                {error && (
                    <h5 className="error">
                        {i18n.t('requiredFieldsMustBeFilled')}
                    </h5>
                )}
                <Button className="mb-4">{i18n.t('register')}</Button>
                <hr className="mb-4" />
            </Form>
        </AuthLayout>
    );
};

export default Login;
