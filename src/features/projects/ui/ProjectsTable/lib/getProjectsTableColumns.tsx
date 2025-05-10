import {Project} from '@/entities/project/model/types';
import {Text as GravityText, Icon, Link, TableColumnConfig} from '@gravity-ui/uikit';
import {Folder} from '@gravity-ui/icons';
import {NavigateFunction} from 'react-router';
import {getProjectPath} from '@/app/url-generators';

export const getProjectsTableColumns = (
    navigate: NavigateFunction,
): TableColumnConfig<Project>[] => [
    {
        id: 'name',
        name: 'Название',
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
];
