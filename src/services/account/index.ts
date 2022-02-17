import { Banks } from '../bank';
import { Currencies } from '../currency';
import { Account } from './types';

export function getAccounts(): Promise<Account[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: '65a225b1-6627-4344-8212-1bd702852186',
                    bank: Banks.GARANTI,
                    currency: Currencies.TRY,
                    price: 5348,
                    accountNumber: '065 - 4859672',
                    iban: 'TR63 0006 2442 2238 9792 7468 12',
                    location: { province: 'İstanbul', district: 'Galatasaray' }
                },
                {
                    id: 'a707aea0-b0f1-404a-93f1-215fe6399224',
                    bank: Banks.AK,
                    currency: Currencies.EUR,
                    price: 13945,
                    accountNumber: '063 - 9574818',
                    iban: 'TR300 0062 6536 8212 6188 9547 44',
                    location: { province: 'İstanbul', district: 'Bakırköy' }
                },
                {
                    id: '7462167f-d8ee-4fec-aa9e-cc50355bcad8',
                    bank: Banks.IS,
                    currency: Currencies.USD,
                    price: 5911,
                    accountNumber: '062 - 1239573',
                    iban: 'TR39 0006 2134 2255 7358 1968 86',
                    location: { province: 'İstanbul', district: 'Kadıköy' }
                },
                {
                    id: '0c0f102a-78eb-46d9-917d-3e7ba517fed8',
                    bank: Banks.IS,
                    currency: Currencies.USD,
                    price: 4852,
                    accountNumber: '061 - 1238571',
                    iban: 'TR91 0006 2176 9889 3931 2668 19',
                    location: { province: 'İstanbul', district: 'Pendik' }
                }
            ]);
        }, 1000);
    });
}
