import {useNavigate, useParams} from 'react-router-dom';
import {PageContainer} from '@/shared/ui/PageContainer';
import {LogsFilters} from '@/features/logs/ui/LogsFilters/LogsFilters';
import {LogsTable} from '@/features/logs/ui/LogsTable';
import {PaginationWithControls} from '@/shared/ui/PaginationWithControls';
import {useLogs} from '@/features/logs/hooks/useLogs';
import {Text as GravityText} from '@gravity-ui/uikit';
import {ErrorsFilters} from '@/features/errors/ui/ErrorsFilters';
import {ErrorsTable} from '@/features/errors/ui/ErrorsTable';
import {useErrors} from '@/features/errors/hooks/useErrors';
import {useProject} from '@/features/projects/hooks/useProject';
import {DataLoader} from '@/shared/ui/DataLoader';
import {DataFetchError} from '@/shared/ui/DataFetchError';
import QuickStart from '@/shared/ui/QuickStart/QuickStart';
import {useState} from 'react';
import ProjectTabs, {TabsState} from '@/features/projects/ui/ProjectTabs/ProjectTabs';

const ProjectPage = () => {
    const {projectId} = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<TabsState>(TabsState.QUICK_START);
    const {project, dsn, loading, error} = useProject({id: projectId ?? ''});

    const {
        logs,
        loading: logsLoading,
        error: logsError,
        total: logsTotal,
        page: logsPage,
        pageSize: logsPageSize,
        filters: logsFilters,
        setPage: logsSetPage,
        setPageSize: logsSetPageSize,
        handleFilterChange: logsHandleFilterChange,
        handleResetFilters: logsHandleResetFilters,
        handleLoad: logsHandleLoad,
    } = useLogs({projectId});

    const {
        errors,
        loading: errorsLoading,
        error: errorsError,
        total: errorsTotal,
        page: errorsPage,
        pageSize: errorsPageSize,
        filters: errorsFilters,
        setPage: errorsSetPage,
        setPageSize: errorsSetPageSize,
        handleFilterChange: errorsHandleFilterChange,
        handleResetFilters: errorsHandleResetFilters,
        handleLoad: errorsHandleLoad,
    } = useErrors({projectId});

    const handleRetry = () => {
        window.location.reload();
    };

    if (loading) return <DataLoader />;
    if (error) return <DataFetchError errorMessage={error} onRetry={handleRetry} />;

    return (
        <PageContainer>
            <GravityText variant="header-1">{project?.name}</GravityText>

            <ProjectTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                errorsTotal={errorsTotal}
                logsTotal={logsTotal}
            />

            {activeTab === TabsState.QUICK_START && <QuickStart language={'php'} dsn={dsn ?? ''} />}

            {activeTab === TabsState.ERRORS && (
                <>
                    <ErrorsFilters
                        fields={errorsFilters}
                        onFilterChange={errorsHandleFilterChange}
                        onResetFilters={errorsHandleResetFilters}
                    />
                    <ErrorsTable
                        errors={errors}
                        loading={errorsLoading}
                        error={errorsError}
                        navigate={navigate}
                        onRetry={errorsHandleLoad}
                    />
                    <PaginationWithControls
                        page={errorsPage}
                        pageSize={errorsPageSize}
                        total={errorsTotal}
                        onPageChange={errorsSetPage}
                        onPageSizeChange={errorsSetPageSize}
                    />
                </>
            )}

            {activeTab === TabsState.LOGS && (
                <>
                    <LogsFilters
                        fields={logsFilters}
                        onFilterChange={logsHandleFilterChange}
                        onResetFilters={logsHandleResetFilters}
                    />
                    <LogsTable
                        logs={logs}
                        loading={logsLoading}
                        error={logsError}
                        navigate={navigate}
                        onRetry={logsHandleLoad}
                    />
                    <PaginationWithControls
                        page={logsPage}
                        pageSize={logsPageSize}
                        total={logsTotal}
                        onPageChange={logsSetPage}
                        onPageSizeChange={logsSetPageSize}
                    />
                </>
            )}
        </PageContainer>
    );
};

export default ProjectPage;
