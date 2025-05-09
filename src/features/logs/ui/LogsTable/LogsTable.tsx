import {Card, Table} from '@gravity-ui/uikit';
import {DataFetchError} from '@/shared/ui/DataFetchError';
import {DataLoader} from '@/shared/ui/DataLoader';
import {Log} from '@/entities/log/model/types';
import {getLogsTableColumns} from '@/features/logs/ui/LogsTable/lib/getLogsTableColumns';
import {NavigateFunction} from 'react-router';

interface LogsTableProps {
    logs: Log[];
    loading: boolean;
    error: string | null;
    navigate: NavigateFunction;
    onRetry: () => void;
}

export const LogsTable = ({logs, loading, error, navigate, onRetry}: LogsTableProps) => {
    if (loading) return <DataLoader />;
    if (error) return <DataFetchError errorMessage={error} onRetry={onRetry} />;

    return (
        <Card view="raised" style={{marginBottom: 16}}>
            <Table
                data={logs}
                columns={getLogsTableColumns(navigate)}
                emptyMessage="Список логов пуст"
                verticalAlign="middle"
                wordWrap
            />
        </Card>
    );
};
