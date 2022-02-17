import { Card } from './types';

export function getCards(): Promise<Card[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: '08039159-8fd9-4a12-b22d-313b6e2ebdf2',
                    number: '5536704714073243',
                    expireDate: '01/2026'
                },
                {
                    id: '1c6e4b34-ec28-4516-840c-b71b152b92a1',
                    number: '5471372648474841',
                    expireDate: '09/2027'
                },
                {
                    id: '23bae912-2700-40e0-b306-991216c34838',
                    number: '5545702362570642',
                    expireDate: '02/2026'
                },
                {
                    id: '23bae912-2700-40e0-b306-991216c34837',
                    number: '5157056388734065',
                    expireDate: '04/2025'
                },
                {
                    id: '23bae912-2700-40e0-b306-991216c34836',
                    number: '5343131798644579',
                    expireDate: '03/2026'
                },
                {
                    id: '23bae912-2700-40e0-b306-991216c34835',
                    number: '5328115350616983',
                    expireDate: '08/2025'
                },
                {
                    id: '23bae912-2700-40e0-b306-991216c34834',
                    number: '5203090443203539',
                    expireDate: '04/2027'
                },
                {
                    id: '23bae912-2700-40e0-b306-991216c34833',
                    number: '5434054718813852',
                    expireDate: '04/2025'
                },
                {
                    id: '23bae912-2700-40e0-b306-991216c34832',
                    number: '5514249443264693',
                    expireDate: '05/2025'
                },
                {
                    id: '23bae912-2700-40e0-b306-991216c34831',
                    number: '5268486388348564',
                    expireDate: '08/2025'
                }
            ]);
        }, 500);
    });
}
