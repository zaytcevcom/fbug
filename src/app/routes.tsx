import ProjectsPage from '@/pages/ProjectsPage/ProjectsPage';
import LogsPage from '@/pages/LogsPage/LogsPage';
import {RouteObject} from 'react-router-dom';
import {DashboardPage} from '@/pages/DashboardPage/DashboardPage';
import {NotFoundPage} from '@/pages/NotFoundPage';
import ErrorsPage from '@/pages/ErrorsPage/ErrorsPage';
import ProjectPage from '@/pages/ProjectPage/ProjectPage';

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
        element: <ProjectPage />,
    },
    {
        path: '/projects/:projectId/error-groups/:groupId',
        element: <ErrorsPage />,
    },
    {
        path: '/logs',
        element: <LogsPage />,
    },
    {
        path: '/errors',
        element: <ErrorsPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
];
