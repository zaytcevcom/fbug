export interface Log {
    id: string;
    level: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';
    message: string;
    context: string;
    time: number;
}
