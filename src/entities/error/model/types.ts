export interface Err {
    id: string;
    message: string;
    file: string;
    line: number;
    stacktrace: string;
    context: string;
    ip?: string;
    url?: string;
    method?: string;
    headers?: string;
    queryParams?: string;
    bodyParams?: string;
    cookies?: string;
    session?: string;
    files?: string;
    env?: string;
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
