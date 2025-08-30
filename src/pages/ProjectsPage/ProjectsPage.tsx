import {useNavigate} from 'react-router-dom';
import {PageTitle} from '@/shared/ui/PageTitle';
import {PageContainer} from '@/shared/ui/PageContainer';
import {useProjects} from '@/features/projects/hooks/useProjects';
import {ProjectsTable} from '@/features/projects/ui/ProjectsTable';
import {useCallback, useState} from 'react';
import {useHotkeys} from 'react-hotkeys-hook';
import {CreateProjectModal} from './components/CreateProjectModal';
import {useCreateProject} from '@/features/projects/hooks/useCreateProject';

const ProjectsPage = () => {
    const navigate = useNavigate();
    const {projects, loading, error, handleLoadProjects} = useProjects({});
    const [open, setOpen] = useState(false);

    const toggleModal = useCallback(() => {
        setOpen((prevStatus) => !prevStatus);
    }, []);

    const onProjectCreate = useCallback(() => {
        handleLoadProjects();
        toggleModal();
    }, [handleLoadProjects, toggleModal]);

    const {createProject, loading: createingProject} = useCreateProject(onProjectCreate);

    const _createProject = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get('productName') as string;
        createProject({name});
    };

    useHotkeys('a', toggleModal);

    return (
        <PageContainer>
            <PageTitle title={'Проекты'} addHandle={toggleModal} />

            <ProjectsTable
                projects={projects}
                loading={loading}
                error={error}
                navigate={navigate}
                onRetry={handleLoadProjects}
            />

            <CreateProjectModal
                open={open}
                onOpenChange={toggleModal}
                createProject={_createProject}
                creatingProject={createingProject}
            />
        </PageContainer>
    );
};

export default ProjectsPage;
