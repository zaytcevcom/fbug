import {DataFetchError} from '@/shared/ui/DataFetchError';
import {DataLoader} from '@/shared/ui/DataLoader';
import {NavigateFunction} from 'react-router';
import {Err} from '@/entities/error/model/types';
import {getErrorsTableColumns} from '@/features/errors/ui/ErrorsTable/lib/getErrorsTableColumns';
import Table from '@/shared/ui/Table/Table';

interface ErrorsTableProps {
    errors: Err[];
    loading: boolean;
    error: string | null;
    navigate: NavigateFunction;
    onRetry: () => void;
}

export const ErrorsTable = ({errors, loading, error, navigate, onRetry}: ErrorsTableProps) => {
    if (loading) return <DataLoader />;
    if (error) return <DataFetchError errorMessage={error} onRetry={onRetry} />;

    return (
        <Table
            data={errors}
            columns={getErrorsTableColumns(navigate)}
            emptyMessage="Список ошибок пуст"
        />
    );
};
