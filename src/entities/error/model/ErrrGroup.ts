export interface ErrGroup {
    id: string;
    message: string;
    file: string;
    line: number;
    firstSeenAt: number;
    lastSeenAt: number;
    counter: number;
}
