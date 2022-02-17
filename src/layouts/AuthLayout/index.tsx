import React from 'react';
import styles from './index.module.css';
import { WorkIcon } from '../../icons';
import i18n from '../../i18n';
import { isDesktop } from 'react-device-detect';

type Props = {
    children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
    return (
        <div className="container">
            <h1 className={styles.authSlogan}>
                {i18n.t('welcomeTo')}
                {!isDesktop ? <br /> : ' '}
                <b>{i18n.t('innovanceSampleBank')}</b>
            </h1>
            <div className={styles.authContainer}>
                <section className={styles.authContainerLeftSection}>
                    <img
                        src={WorkIcon}
                        className="max-h-screen"
                        alt={i18n.t('innovanceSampleBank')}
                    />
                </section>
                <main className={styles.authContainerRightSection}>{children}</main>
            </div>
        </div>
    );
};

export default AuthLayout;
