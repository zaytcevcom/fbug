import {useNavigate, useParams} from 'react-router-dom';
import {PageTitle} from '@/shared/ui/PageTitle';
import {PageContainer} from '@/shared/ui/PageContainer';
import {PaginationWithControls} from '@/shared/ui/PaginationWithControls';
import {useErrors} from '@/features/errors/hooks/useErrors';
import {ErrorsTable} from '@/features/errors/ui/ErrorsTable';
import {ErrorsFilters} from '@/features/errors/ui/ErrorsFilters';

const ErrorsPage = () => {
    const {projectId} = useParams();
    const navigate = useNavigate();
    const {
        errors,
        loading,
        error,
        total,
        page,
        pageSize,
        filters,
        setPage,
        setPageSize,
        handleFilterChange,
        handleResetFilters,
        handleLoadErrors,
    } = useErrors({projectId});

    return (
        <PageContainer>
            <PageTitle title={'Ошибки'} />
            <ErrorsFilters
                fields={filters}
                onFilterChange={handleFilterChange}
                onResetFilters={handleResetFilters}
            />
            <ErrorsTable
                errors={errors}
                loading={loading}
                error={error}
                navigate={navigate}
                onRetry={handleLoadErrors}
            />
            <PaginationWithControls
                page={page}
                pageSize={pageSize}
                total={total}
                onPageChange={setPage}
                onPageSizeChange={setPageSize}
            />
        </PageContainer>
    );
};

export default ErrorsPage;
