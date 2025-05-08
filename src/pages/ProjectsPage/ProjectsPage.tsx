import {useNavigate} from 'react-router-dom';
import {PageTitle} from '@/shared/ui/PageTitle';
import {PageContainer} from '@/shared/ui/PageContainer';
import {useProjects} from '@/features/projects/hooks/useProjects';
import {ProjectsTable} from '@/features/projects/ui/ProjectsTable';

const ProjectsPage = () => {
    const navigate = useNavigate();
    const {projects, loading, error, handleLoadProjects} = useProjects({});

    return (
        <PageContainer>
            <PageTitle title={'Проекты'} addHandle={() => alert('todo')} />
            <ProjectsTable
                projects={projects}
                loading={loading}
                error={error}
                navigate={navigate}
                onRetry={handleLoadProjects}
            />
        </PageContainer>
    );
};

export default ProjectsPage;
