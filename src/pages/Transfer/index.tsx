import { useCallback, useEffect, useState } from 'react';
import { AccountCard, Button, Input } from '../../components';
import { IBAN_REGEX } from '../../const';
import i18n from '../../i18n';
import { SpinnerIcon } from '../../icons';
import MainLayout from '../../layouts/MainLayout';
import { getAccounts } from '../../services/account';
import { Account } from '../../services/account/types';
import { transferMoney, TransferType } from '../../services/transfer';
import styles from './index.module.css';

type TransferForm = {
    account?: Account;
    transferType?: TransferType;
    toIban?: string;
    price?: number;
};

type TransferFormError = {
    account?: string;
    transferType?: string;
    toIban?: string;
    price?: string;
};

const TransferTypes = [
    {
        type: TransferType.eft,
        text: i18n.t('eft')
    },
    {
        type: TransferType.transfer,
        text: i18n.t('transfer')
    },
    {
        type: TransferType.fast,
        text: i18n.t('fast')
    }
];

const Transfer = () => {
    const [transferring, setTransferring] = useState<boolean>(false);
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [formData, setFormData] = useState<TransferForm>({});
    const [formErrors, setFormErrors] = useState<TransferFormError>({});
    useEffect(() => {
        Promise.all([getAccounts()]).then(([accounts]) => {
            setAccounts(accounts);
        });
    }, []);
    const accountCardOnClick = useCallback(
        (account: Account) => {
            setFormData({
                ...formData,
                account
            });
        },
        [accounts]
    );
    const transferTypeOnClick = (transferType: TransferType) => {
        setFormData({
            ...formData,
            transferType
        });
    };
    const transfer = () => {
        if (transferring) {
            return;
        }

        let _formErrors = { ...formErrors };
        if (!formData.account) {
            _formErrors = {
                ..._formErrors,
                account: i18n.t('requiredFieldsMustBeFilled')
            };
        } else {
            _formErrors = {
                ..._formErrors,
                account: undefined
            };
        }

        if (!formData.toIban) {
            _formErrors = {
                ..._formErrors,
                toIban: i18n.t('requiredFieldsMustBeFilled')
            };
        } else if (!IBAN_REGEX.test(formData.toIban)) {
            _formErrors = {
                ..._formErrors,
                toIban: i18n.t('enterValidIban')
            };
        } else {
            _formErrors = {
                ..._formErrors,
                toIban: undefined
            };
        }

        if (!formData.price) {
            _formErrors = {
                ..._formErrors,
                price: i18n.t('requiredFieldsMustBeFilled')
            };
        } else if (formData.price > Number(formData.account?.price || 0)) {
            _formErrors = {
                ..._formErrors,
                price: i18n.t('youCantTransferMoreThanMoney')
            };
        } else {
            _formErrors = {
                ..._formErrors,
                price: undefined
            };
        }

        if (!formData.transferType) {
            _formErrors = {
                ..._formErrors,
                transferType: i18n.t('requiredFieldsMustBeFilled')
            };
        } else {
            _formErrors = {
                ..._formErrors,
                transferType: undefined
            };
        }

        setFormErrors(_formErrors);

        const errorIsExists = Object.values(_formErrors).filter((e) => !!e).length > 0;
        if (!errorIsExists) {
            setTransferring(true);
            transferMoney({
                accountId: formData.account?.id || '',
                transferType: Number(formData.transferType),
                toIban: formData.toIban || '',
                price: formData.price || 0
            }).then(() => {
                setTransferring(false);
                alert(i18n.t('transferSuccessfully'));
            });
        }
    };
    return (
        <MainLayout>
            <div className={styles.transferContainer}>
                <div>
                    <h5 className={styles.transferField}>{i18n.t('selectTransferTo')}</h5>
                </div>
                <div className={styles.transferAccounts}>
                    {accounts.map((account) => (
                        <AccountCard
                            key={`transfer-account-${account.id}`}
                            account={account}
                            onClick={() => accountCardOnClick(account)}
                            selected={formData?.account?.id === account.id}
                        />
                    ))}
                </div>
                {formErrors.account && <h5 className="error text-center">{formErrors.account}</h5>}
                <div className={styles.transferToIbanField}>
                    <h5 className={styles.transferSubField}>{i18n.t('enterIbanToPerson')}</h5>
                    <Input
                        value={formData?.toIban}
                        onChange={(e) => setFormData({ ...formData, toIban: e.target.value })}
                    />
                </div>
                {formErrors.toIban && <h5 className="error text-center">{formErrors.toIban}</h5>}

                <div className={styles.transferPriceField}>
                    <h5 className={styles.transferSubField}>{i18n.t('enterPriceToTransfer')}</h5>
                    <Input
                        type="number"
                        value={formData?.price}
                        onChange={(e) =>
                            setFormData({ ...formData, price: Number(e.target.value) })
                        }
                    />
                    {formErrors.price && <h5 className="error text-center">{formErrors.price}</h5>}
                </div>

                <div className={styles.transferTypeField}>
                    <h5 className={styles.transferSubField}>Transfer tipini secin</h5>
                    {TransferTypes.map((t) => (
                        <button
                            key={`transfer-type-${t.type}`}
                            className={[
                                styles.transferTypeButton,
                                ...[
                                    t.type === formData.transferType
                                        ? styles.transferTypeButtonSelected
                                        : undefined
                                ]
                            ].join(' ')}
                            onClick={() => transferTypeOnClick(t.type)}
                        >
                            {t.text}
                        </button>
                    ))}
                    {formErrors.transferType && (
                        <h5 className="error text-center">{formErrors.transferType}</h5>
                    )}
                </div>

                <div className={styles.transferButtonField}>
                    <Button onClick={transfer}>
                        {transferring ? <img src={SpinnerIcon} width={30} /> : 'Transfer'}
                    </Button>
                </div>
            </div>
        </MainLayout>
    );
};

export default Transfer;
