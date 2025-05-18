import {API_BASE_URL} from '@/shared/config/api';

export interface LogsStatsResponse {
    last24h: number;
    last7d: number;
    last30d: number;
}

interface FetchLogsStatsParams {
    projectId: string;
    groupId?: string;
}

export const fetchLogsStats = async ({
    projectId,
    groupId,
}: FetchLogsStatsParams): Promise<LogsStatsResponse> => {
    const params = new URLSearchParams({
        ...(projectId && {projectId}),
        ...(groupId && {groupId: groupId}),
    });

    const response = await fetch(`${API_BASE_URL}/logs/stats?${params}`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};
