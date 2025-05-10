import {Card, Table} from '@gravity-ui/uikit';
import {DataFetchError} from '@/shared/ui/DataFetchError';
import {DataLoader} from '@/shared/ui/DataLoader';
import {NavigateFunction} from 'react-router';
import {ErrGroup} from '@/entities/error/model/types';
import {getErrorGroupsTableColumns} from '@/features/errors/ui/ErrorGroupsTable/lib/getErrorGroupsTableColumns';

interface ErrorGroupsTableProps {
    projectId: string;
    errors: ErrGroup[];
    loading: boolean;
    error: string | null;
    navigate: NavigateFunction;
    onRetry: () => void;
}

export const ErrorGroupsTable = ({
    projectId,
    errors,
    loading,
    error,
    navigate,
    onRetry,
}: ErrorGroupsTableProps) => {
    if (loading) return <DataLoader />;
    if (error) return <DataFetchError errorMessage={error} onRetry={onRetry} />;

    return (
        <Card view="raised" style={{marginBottom: 16}}>
            <Table
                data={errors}
                columns={getErrorGroupsTableColumns(projectId, navigate)}
                emptyMessage="Список ошибок пуст"
                verticalAlign="middle"
                wordWrap
            />
        </Card>
    );
};
