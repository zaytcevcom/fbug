import {API_BASE_URL} from '@/shared/config/api';
import {ErrGroup} from '@/entities/error/model/types';

interface FetchErrorGroupParams {
    id: string;
}

export const fetchErrorGroupById = async ({id}: FetchErrorGroupParams): Promise<ErrGroup> => {
    const response = await fetch(`${API_BASE_URL}/error-groups/${id}`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};
