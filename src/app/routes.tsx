import ProjectsPage from '@/pages/ProjectsPage/ProjectsPage';
import LogsPage from '@/pages/LogsPage/LogsPage';
import {RouteObject} from 'react-router-dom';
import {DashboardPage} from '@/pages/DashboardPage/DashboardPage';
import {NotFoundPage} from '@/pages/NotFoundPage';
import ErrorGroupPage from '@/pages/ErrorGroupPage/ErrorGroupPage';
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
        element: <ErrorGroupPage />,
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
