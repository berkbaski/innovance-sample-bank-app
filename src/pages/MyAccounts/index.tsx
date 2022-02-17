import { useEffect, useState } from 'react';
import { AccountCard } from '../../components';
import { SpinnerIcon } from '../../icons';
import MainLayout from '../../layouts/MainLayout';
import { getAccounts } from '../../services/account';
import { Account } from '../../services/account/types';
import styles from './index.module.css';

const MyAccounts = () => {
    const [loading, setLoading] = useState<boolean>();
    const [accounts, setAccounts] = useState<Account[]>([]);

    useEffect(() => {
        setLoading(true);
        Promise.all([getAccounts()]).then(([accounts]) => {
            setAccounts(accounts);
            setLoading(false);
        });
    }, []);

    return (
        <MainLayout>
            {loading && (
                <div className="loading-container">
                    <img src={SpinnerIcon} alt="Loading spinner" />
                </div>
            )}
            <div className={styles.myAccountsContainer}>
                {accounts.map((account) => (
                    <AccountCard key={`account-${account.id}`} account={account} />
                ))}
            </div>
        </MainLayout>
    );
};

export default MyAccounts;
