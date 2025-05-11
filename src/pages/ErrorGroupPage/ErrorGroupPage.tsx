import {useParams} from 'react-router-dom';
import {PageContainer} from '@/shared/ui/PageContainer';
import {PaginationWithControls} from '@/shared/ui/PaginationWithControls';
import {useErrors} from '@/features/errors/hooks/useErrors';
import {ErrorsTable} from '@/features/errors/ui/ErrorsTable';
import {ErrorsFilters} from '@/features/errors/ui/ErrorsFilters';
import {ErrorDetail} from '@/features/errors/ui/ErrorDetail';
import {Err} from '@/entities/error/model/types';
import {useEffect, useState} from 'react';
import {StatBlock} from '@/shared/ui/StatBlock';
import {Divider} from '@gravity-ui/uikit';
import {ErrorGroupDetail} from '@/features/errors/ui/ErrorGroupDetail';

const ErrorGroupPage = () => {
    const {projectId, groupId} = useParams();
    const [errorId, setErrorId] = useState<string | undefined>(undefined);

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
        handleLoad,
    } = useErrors({projectId, groupId});

    useEffect(() => {
        if (errors[0]) {
            setErrorId(errors[0].id);
        }
    }, [errors]);

    const handleRowClick = (err: Err) => {
        setErrorId(err.id);
    };

    return (
        <PageContainer>
            <div className="g-row g-row_s_5">
                <div className="g-col g-col_size_8">
                    <ErrorGroupDetail id={groupId} />

                    <Divider style={{margin: '16px 0'}} />

                    <ErrorDetail id={errorId} />
                </div>
                <div className="g-col g-col_size_4">
                    <StatBlock title={'Последние 24 ч'} counter={343} />
                    <StatBlock title={'Последние 7 дней'} counter={23} />
                    <StatBlock title={'Последние 30 дней'} counter={2} />

                    <ErrorsFilters
                        fields={filters}
                        onFilterChange={handleFilterChange}
                        onResetFilters={handleResetFilters}
                    />
                    <ErrorsTable
                        errors={errors}
                        loading={loading}
                        error={error}
                        onRetry={handleLoad}
                        onRowClick={handleRowClick}
                    />
                    <PaginationWithControls
                        page={page}
                        pageSize={pageSize}
                        total={total}
                        onPageChange={setPage}
                        onPageSizeChange={setPageSize}
                    />
                </div>
            </div>
        </PageContainer>
    );
};

export default ErrorGroupPage;
