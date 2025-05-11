import React from 'react';
import {Card} from '@gravity-ui/uikit';

interface StackTraceProps {
    stacktrace: string;
}

const StackTrace: React.FC<StackTraceProps> = ({stacktrace}) => {
    const stackLines = stacktrace.split('\n').filter((line) => line.trim() !== '');

    return (
        <Card view={'raised'} style={{padding: '8px'}}>
            {stackLines.map((row, index: number) => (
                <Card key={index} style={{marginBottom: '8px', padding: '8px'}}>
                    {row.trim()}
                </Card>
            ))}
        </Card>
    );
};

export default StackTrace;
