import {Project} from '@/entities/project/model/types';
import {API_BASE_URL} from '@/shared/config/api';

interface ProjectsResponse {
    count: number;
    items: Project[];
}

interface FetchProjectsParams {
    page: number;
    pageSize: number;
}

export const fetchProjects = async ({
    page,
    pageSize,
}: FetchProjectsParams): Promise<ProjectsResponse> => {
    const params = new URLSearchParams({
        sort: 'desc',
        limit: pageSize.toString(),
        offset: ((page - 1) * pageSize).toString(),
    });

    const response = await fetch(`${API_BASE_URL}/projects?${params}`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};
