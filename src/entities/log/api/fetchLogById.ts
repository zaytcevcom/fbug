import {API_BASE_URL} from '@/shared/config/api';
import {Log} from '@/entities/log/model/types';

interface FetchLogParams {
    id: string;
}

export const fetchLogById = async ({id}: FetchLogParams): Promise<Log> => {
    const response = await fetch(`${API_BASE_URL}/logs/${id}`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};
