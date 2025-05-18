import {API_BASE_URL} from '@/shared/config/api';
import {LogGroup} from '@/entities/log/model/types';

interface FetchLogGroupParams {
    id: string;
}

export const fetchLogGroupById = async ({id}: FetchLogGroupParams): Promise<LogGroup> => {
    const response = await fetch(`${API_BASE_URL}/log-groups/${id}`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};
