import { FastAction, LeftMenuItem } from './types';
import i18n from '../../i18n';

export function getLeftMenuItems(): Promise<LeftMenuItem[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 'a22db21e-5e44-4838-abe3-65e5e87a96f6',
                    title: i18n.t('myAccounts'),
                    link: '/my-accounts',
                    icon: ''
                },
                {
                    id: '0e980f6c-90d8-4ebb-9283-69e8bfedcd05',
                    title: i18n.t('myCards'),
                    link: '/my-cards',
                    icon: ''
                },
                {
                    id: '56c656e0-9d49-4689-b1ca-9db7923cdcb2',
                    title: i18n.t('myIncomes'),
                    link: '/my-incomes',
                    icon: ''
                },
                {
                    id: '7332c30e-9bfd-4607-94d1-2e3989d27a55',
                    title: i18n.t('myOutgoings'),
                    link: '/my-outgoings',
                    icon: ''
                }
            ]);
        }, 1000);
    });
}

export function getFastActions(): Promise<FastAction[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: 'de095cb2-0d5d-43eb-a962-dd31bd393265',
                    title: i18n.t('fast'),
                    link: '/transfer/fast'
                },
                {
                    id: 'cce23f32-51c6-46ad-b830-ab96ac334ace',
                    title: i18n.t('transfer'),
                    link: '/transfer'
                },
                {
                    id: '76475361-4eaa-4548-9157-ee7dc1b2e662',
                    title: i18n.t('eft'),
                    link: '/transfer/eft'
                }
            ]);
        }, 1500);
    });
}
