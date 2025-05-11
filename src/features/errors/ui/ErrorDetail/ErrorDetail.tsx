import {DataFetchError} from '@/shared/ui/DataFetchError';
import {DataLoader} from '@/shared/ui/DataLoader';
import StackTrace from '@/shared/ui/StackTrace/StackTrace';
import {useError} from '@/features/errors/hooks/useError';
import {formatDateTime} from '@/shared/lib/format/formatDate';
import {Label} from '@gravity-ui/uikit';
import CodeBlock from '@/shared/ui/CodeBlock/CodeBlock';
import {SubTitle} from '@/shared/ui/SubTitle';

interface ErrorDetailProps {
    id?: string;
}

const handleRetry = () => {
    window.location.reload();
};

export const ErrorDetail = ({id}: ErrorDetailProps) => {
    const {err, loading, error} = useError({id});

    if (error) return <DataFetchError errorMessage={error} onRetry={handleRetry} />;
    if (!err || loading) return <DataLoader />;

    return (
        <>
            <div className="g-box g-flex" style={{justifyContent: 'space-between'}}>
                <Label theme={'info'}>{formatDateTime(err.time)}</Label>
                <Label theme={'clear'} type={'copy'} copyText={id}>
                    <b>ID</b>: {id}
                </Label>
            </div>

            {err.context && (
                <>
                    <SubTitle title={'Context'} />
                    <CodeBlock language={'json'}>{err.context}</CodeBlock>
                </>
            )}

            <SubTitle title={'Stack trace'} />
            <StackTrace stacktrace={err.stacktrace} />
        </>
    );
};
