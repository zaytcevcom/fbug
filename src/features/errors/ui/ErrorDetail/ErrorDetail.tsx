import {DataFetchError} from '@/shared/ui/DataFetchError';
import {DataLoader} from '@/shared/ui/DataLoader';
import StackTrace from '@/shared/ui/StackTrace/StackTrace';
import {useError} from '@/features/errors/hooks/useError';
import {formatDateTimeMilliseconds} from '@/shared/lib/format/formatDateMilliseconds';
import {Text as GravityText, Label} from '@gravity-ui/uikit';
import CodeBlock from '@/shared/ui/CodeBlock/CodeBlock';
import ErrorGroupTabs, {
    ErrorGroupTabsState,
} from '@/features/errors/ui/ErrorGroupTabs/ErrorGroupTabs';
import {useState} from 'react';

interface ErrorDetailProps {
    id?: string;
}

const handleRetry = () => {
    window.location.reload();
};

export const ErrorDetail = ({id}: ErrorDetailProps) => {
    const {err, loading, error} = useError({id});
    const [activeTab, setActiveTab] = useState<ErrorGroupTabsState>(
        ErrorGroupTabsState.STACK_TRACE,
    );

    if (error) return <DataFetchError errorMessage={error} onRetry={handleRetry} />;
    if (!err || loading) return <DataLoader />;

    return (
        <>
            <div className="g-box g-flex" style={{justifyContent: 'space-between'}}>
                <Label theme={'info'}>{formatDateTimeMilliseconds(err.time)}</Label>
                <Label theme={'clear'} type={'copy'} copyText={id}>
                    <b>ID</b>: {id}
                </Label>
            </div>

            <ErrorGroupTabs activeTab={activeTab} setActiveTab={setActiveTab} err={err} />

            {activeTab === ErrorGroupTabsState.STACK_TRACE && (
                <StackTrace stacktrace={err.stacktrace} />
            )}

            {activeTab === ErrorGroupTabsState.CONTEXT && (
                <CodeBlock language={'json'}>{err.context}</CodeBlock>
            )}

            {activeTab === ErrorGroupTabsState.REQUEST && (
                <>
                    <div style={{marginTop: '16px'}}>
                        <GravityText variant={'body-3'}>URL</GravityText>
                        <br />
                        {err.url}
                    </div>

                    <div style={{marginTop: '16px'}}>
                        <GravityText variant={'body-3'}>Method</GravityText>
                        <br />
                        {err.method}
                    </div>

                    <div style={{marginTop: '16px'}}>
                        <GravityText variant={'body-3'}>IP</GravityText>
                        <br />
                        {err.ip}
                    </div>

                    <div style={{marginTop: '16px'}}>
                        <GravityText variant={'header-1'}>Headers</GravityText>
                        <CodeBlock language={'json'}>{err.headers}</CodeBlock>
                    </div>

                    <div style={{marginTop: '16px'}}>
                        <GravityText variant={'header-1'}>Query Params</GravityText>
                        <CodeBlock language={'json'}>{err.queryParams}</CodeBlock>
                    </div>

                    <div style={{marginTop: '16px'}}>
                        <GravityText variant={'header-1'} style={{marginTop: '16px'}}>
                            Body Params
                        </GravityText>
                        <CodeBlock language={'json'}>{err.bodyParams}</CodeBlock>
                    </div>

                    <div style={{marginTop: '16px'}}>
                        <GravityText variant={'header-1'}>Cookies</GravityText>
                        <CodeBlock language={'json'}>{err.cookies}</CodeBlock>
                    </div>

                    <div style={{marginTop: '16px'}}>
                        <GravityText variant={'header-1'}>Session</GravityText>
                        <CodeBlock language={'json'}>{err.session}</CodeBlock>
                    </div>

                    <div style={{marginTop: '16px'}}>
                        <GravityText variant={'header-1'}>Files</GravityText>
                        <CodeBlock language={'json'}>{err.files}</CodeBlock>
                    </div>
                </>
            )}

            {activeTab === ErrorGroupTabsState.ENV && (
                <CodeBlock language={'json'}>{err.env}</CodeBlock>
            )}
        </>
    );
};
