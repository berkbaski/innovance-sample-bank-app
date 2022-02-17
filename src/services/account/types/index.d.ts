import Bank from '../../bank/types';
import Currency from '../../currency/types';

export type Account = {
    id: string;
    bank: Bank;
    currency: Currency;
    price: number;
    accountNumber: string;
    iban: string;
    location: {
        province: string;
        district: string;
    };
};
