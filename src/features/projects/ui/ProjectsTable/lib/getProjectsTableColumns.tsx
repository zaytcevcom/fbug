import {Project} from '@/entities/project/model/types';
import {Button, Text as GravityText, Icon, Link, TableColumnConfig} from '@gravity-ui/uikit';
import {ArrowRight, Folder} from '@gravity-ui/icons';
import {NavigateFunction} from 'react-router';
import {getProjectPath} from '@/app/url-generators';

export const getProjectsTableColumns = (
    navigate: NavigateFunction,
): TableColumnConfig<Project>[] => [
    {
        id: 'name',
        name: 'Название проекта',
        template: (project: Project) => {
            const url = getProjectPath(project.id);

            return (
                <Link view="primary" href={url} onClick={() => navigate(url)}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                        <Icon data={Folder} size={16} />
                        <GravityText variant="subheader-2">{project.name}</GravityText>
                    </div>
                </Link>
            );
        },
    },
    {
        id: 'actions',
        name: 'Действия',
        template: (project: Project) => (
            <Button view="outlined" size="m" onClick={() => navigate(getProjectPath(project.id))}>
                Перейти <Icon data={ArrowRight} size={14} />
            </Button>
        ),
    },
];
