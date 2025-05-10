import {NavigateFunction} from 'react-router';
import {Text as GravityText, Label, Link, TableColumnConfig} from '@gravity-ui/uikit';
import {getErrorGroupPath} from '@/app/url-generators';
import {ErrGroup} from '@/entities/error/model/types';

export const getErrorGroupsTableColumns = (
    projectId: string,
    navigate: NavigateFunction,
): TableColumnConfig<ErrGroup>[] => [
    {
        id: 'message',
        name: 'Ошибка',
        template: (group: ErrGroup) => (
            <>
                <Link
                    title={group.message}
                    onClick={() => navigate(getErrorGroupPath(projectId, group.id))}
                    href={''}
                >
                    {group.message}
                </Link>
                <br />
                <GravityText color="secondary" ellipsis>
                    <b>Строка</b>: {group.line}, <b>Файл</b>: {group.file}
                </GravityText>
            </>
        ),
    },
    {
        id: 'counter',
        name: 'Событий',
        template: (group: ErrGroup) => (
            <Label size={'m'} theme={'info'}>
                {group.counter}
            </Label>
        ),
        align: 'center',
    },
];
