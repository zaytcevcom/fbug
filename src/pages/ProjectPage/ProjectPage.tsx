import {useNavigate, useParams} from 'react-router-dom';
import {PageContainer} from '@/shared/ui/PageContainer';
import {LogsFilters} from '@/features/logs/ui/LogsFilters/LogsFilters';
import {LogsTable} from '@/features/logs/ui/LogsTable';
import {PaginationWithControls} from '@/shared/ui/PaginationWithControls';
import {useLogs} from '@/features/logs/hooks/useLogs';
import {Text as GravityText, Icon, Tab, TabList} from '@gravity-ui/uikit';
import {useEffect, useState} from 'react';
import {ErrorsFilters} from '@/features/errors/ui/ErrorsFilters';
import {ErrorsTable} from '@/features/errors/ui/ErrorsTable';
import {useErrors} from '@/features/errors/hooks/useErrors';
import {useProject} from '@/features/projects/hooks/useProject';
import {BookOpen, CircleExclamation, TriangleExclamation} from '@gravity-ui/icons';
import {DataLoader} from '@/shared/ui/DataLoader';
import {DataFetchError} from '@/shared/ui/DataFetchError';
import Prism from 'prismjs';
import QuickStart from '@/shared/ui/QuickStart/QuickStart';

const ProjectPage = () => {
    const {projectId} = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('quickStart');
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

    const handleTabChange = (newValue: string) => {
        setActiveTab(newValue);
    };

    useEffect(() => {
        if (errorsTotal !== 0 || logsTotal !== 0) {
            setActiveTab('errors');
        }
        Prism.highlightAll();
    }, [errorsTotal, logsTotal]);

    if (loading) return <DataLoader />;
    if (error)
        return (
            <DataFetchError
                errorMessage={error}
                onRetry={() => {
                    window.location.reload();
                }}
            />
        );

    return (
        <PageContainer>
            <GravityText variant="header-1">{project?.name}</GravityText>
            <TabList
                style={{marginBottom: '16px'}}
                size={'xl'}
                value={activeTab}
                onUpdate={(value) => handleTabChange(value)}
            >
                <Tab value="quickStart" icon={<Icon data={BookOpen} />}>
                    Быстрый старт
                </Tab>
                <Tab
                    value="errors"
                    icon={<Icon data={TriangleExclamation} />}
                    counter={errorsTotal}
                >
                    Ошибки
                </Tab>
                <Tab value="logs" icon={<Icon data={CircleExclamation} />} counter={logsTotal}>
                    Логи
                </Tab>
            </TabList>

            {activeTab === 'quickStart' && <QuickStart language={'php'} dsn={dsn ?? ''} />}

            {activeTab === 'errors' && (
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

            {activeTab === 'logs' && (
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
