import { useEffect, useState } from 'react';
import { AccountCard, Spinner } from '../../components';
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
            <Spinner show={loading} />
            <div className={styles.myAccountsContainer}>
                {accounts.map((account) => (
                    <AccountCard key={`account-${account.id}`} account={account} />
                ))}
            </div>
        </MainLayout>
    );
};

export default MyAccounts;
