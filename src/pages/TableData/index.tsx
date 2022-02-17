import { useEffect, useMemo, useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import MainLayout from '../../layouts/MainLayout';
import { TableDataList, TableDataType } from '../../lib/tableData';
import { Income } from '../../services/income/types';
import { Outgoing } from '../../services/outgoing/types';
import { Spinner } from '../../components';

type TableDataPageProps = {
    dataType: TableDataType;
};

const TableData = ({ dataType }: TableDataPageProps) => {
    const [loading, setLoading] = useState<boolean>();
    const [columnList, setColumnList] = useState<TableColumn<Income | Outgoing>[]>([]);
    const [dataList, setDataList] = useState<(Income | Outgoing)[]>([]);
    const currentTableData = useMemo(
        () => TableDataList.find((d) => d.type === dataType),
        [dataType]
    );

    useEffect(() => {
        setLoading(true);
        currentTableData?.columns && setColumnList(currentTableData?.columns);
        currentTableData?.service().then((response) => {
            setLoading(false);
            setDataList(response);
        });
        //TODO React Hook useEffect has a missing dependency: 'currentTableData'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
        // eslint-disable-next-line
    }, [dataType]);

    return (
        <MainLayout>
            {loading ? (
                <Spinner show={loading} />
            ) : (
                <DataTable columns={columnList} data={dataList} />
            )}
        </MainLayout>
    );
};

export default TableData;
