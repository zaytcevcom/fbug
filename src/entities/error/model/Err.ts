export interface Err {
    id: string;
    message: string;
    file: string;
    line: number;
    stacktrace: string;
    context?: Record<string, unknown> | Array<unknown>;
    ip?: string;
    url?: string;
    method?: string;
    headers?: Record<string, unknown>;
    queryParams?: Record<string, unknown>;
    bodyParams?: Record<string, unknown>;
    cookies?: Record<string, unknown>;
    session?: Record<string, unknown>;
    files?: Record<string, unknown>;
    env?: Record<string, unknown>;
    time: number;
}
