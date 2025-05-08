import ProjectsPage from '@/pages/ProjectsPage/ProjectsPage';
import LogsPage from '@/pages/LogsPage/LogsPage';
import {RouteObject} from 'react-router-dom';
import {DashboardPage} from '@/pages/DashboardPage/DashboardPage';
import {NotFoundPage} from '@/pages/NotFoundPage';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <DashboardPage />,
    },
    {
        path: '/projects',
        element: <ProjectsPage />,
    },
    {
        path: '/projects/:projectId',
        element: <LogsPage />,
    },
    {
        path: '/logs',
        element: <LogsPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
];
