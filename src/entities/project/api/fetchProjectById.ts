import {Project} from '@/entities/project/model/types';
import {API_BASE_URL} from '@/shared/config/api';

interface FetchProjectParams {
    id: string;
}

export const fetchProjectById = async ({id}: FetchProjectParams): Promise<Project> => {
    const response = await fetch(`${API_BASE_URL}/projects/${id}`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};
