import { TableColumn } from 'react-data-table-component';
import moment from 'moment';

import { STANDARD_DATE_FORMAT } from '../const';
import { getIncomes } from '../services/income';
import { Income } from '../services/income/types';
import i18n from '../i18n';

export enum TableDataType {
    INCOME,
    OUTGOING
}

type TableDataColumnType<T> = {
    type: TableDataType;
    service: typeof getIncomes;
    columns: TableColumn<T>[];
};

export const TableDataList: TableDataColumnType<Income>[] = [
    {
        type: TableDataType.INCOME,
        service: getIncomes,
        columns: [
            {
                name: i18n.t('transactionID'),
                selector: (row: Income) => row.id
            },
            {
                name: i18n.t('senderFirstLastName'),
                selector: (row: Income) => `${row.fromFirstName} ${row.fromLastName}`
            },
            {
                name: i18n.t('price'),
                selector: (row: Income) => String(row.price) + ' $',
                sortable: true,
                sortFunction: (a, b) => a.price - b.price
            },
            {
                name: i18n.t('transactionDate'),
                selector: (row: Income) => moment(row.date).format(STANDARD_DATE_FORMAT),
                sortable: true,
                sortFunction: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
            }
        ]
    }
];
