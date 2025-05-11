import {API_BASE_URL} from '@/shared/config/api';
import {Err} from '@/entities/error/model/types';

interface FetchErrorParams {
    id: string;
}

export const fetchErrorById = async ({id}: FetchErrorParams): Promise<Err> => {
    const response = await fetch(`${API_BASE_URL}/errors/${id}`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};
