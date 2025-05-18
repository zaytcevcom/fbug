import {API_BASE_URL} from '@/shared/config/api';

export interface ErrorsStatsResponse {
    last24h: number;
    last7d: number;
    last30d: number;
}

interface FetchErrorsStatsParams {
    projectId: string;
    groupId?: string;
}

export const fetchErrorsStats = async ({
    projectId,
    groupId,
}: FetchErrorsStatsParams): Promise<ErrorsStatsResponse> => {
    const params = new URLSearchParams({
        ...(projectId && {projectId}),
        ...(groupId && {groupId: groupId}),
    });

    const response = await fetch(`${API_BASE_URL}/errors/stats?${params}`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};
