export interface Err {
    id: string;
    message: string;
    file: string;
    line: number;
    stacktrace: string;
    context: string;
    time: number;
}

export interface ErrGroup {
    id: string;
    message: string;
    file: string;
    line: number;
    firstSeenAt: number;
    lastSeenAt: number;
    counter: number;
}
