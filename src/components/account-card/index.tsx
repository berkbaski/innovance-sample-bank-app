import { useMemo } from 'react';
import { Account } from '../../services/account/types';
import Banks from '../../const/bank';
import Currencies from '../../const/currency';
import styles from './index.module.css';

type AccoundCardProps = {
    account: Account;
};

const AccountCard = ({ account }: AccoundCardProps) => {
    const bankDetails = useMemo(() => Banks.find((b) => b.bank === account.bank), [account]);
    const currentyDetails = useMemo(
        () => Currencies.find((c) => c.currency === account.currency),
        [account]
    );
    return (
        <div className={styles.accountCard}>
            <div className={styles.accountCardInfo}>
                <h5 className={styles.accountCardNumber}>{account.accountNumber}</h5>
                <h5 className={styles.accountCardIban}>{account.iban}</h5>
            </div>
            <h3 className={styles.accountCardPrice}>
                {account.price} {currentyDetails?.sign}
            </h3>
            <div className={styles.accountCardBankDetails}>
                <div>
                    <h6>
                        {bankDetails?.name} / {account.location.district}
                    </h6>
                </div>
                <img
                    className={styles.accountCardBankImage}
                    alt={bankDetails?.name}
                    src={bankDetails?.image}
                />
            </div>
        </div>
    );
};

export default AccountCard;
