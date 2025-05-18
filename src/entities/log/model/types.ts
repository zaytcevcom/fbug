export interface Log {
    id: string;
    level: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';
    message: string;
    context: string;
    time: number;
}

export interface LogGroup {
    id: string;
    level: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';
    message: string;
    firstSeenAt: number;
    lastSeenAt: number;
    counter: number;
}
