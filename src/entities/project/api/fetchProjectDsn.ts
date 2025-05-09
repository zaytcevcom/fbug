import {API_BASE_URL} from '@/shared/config/api';

interface ProjectsDsnResponse {
    dsn: string;
}

interface FetchProjectParams {
    id: string;
}

export const fetchProjectDsn = async ({id}: FetchProjectParams): Promise<ProjectsDsnResponse> => {
    const response = await fetch(`${API_BASE_URL}/projects/${id}/dsn`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};
