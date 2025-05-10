import {NavigateFunction} from 'react-router';
import {Button, Text as GravityText, Icon, Link, TableColumnConfig} from '@gravity-ui/uikit';
import {ArrowRight} from '@gravity-ui/icons';
import {getErrorPath} from '@/app/url-generators';
import {Err} from '@/entities/error/model/types';

export const getErrorsTableColumns = (navigate: NavigateFunction): TableColumnConfig<Err>[] => [
    {
        id: 'time',
        name: 'Время',
        template: (err: Err) => <GravityText>{new Date(err.time).toLocaleString()}</GravityText>,
        width: 180,
    },
    {
        id: 'message',
        name: 'Ошибка',
        template: (err: Err) => (
            <>
                <Link title={err.message} onClick={() => navigate(getErrorPath(err.id))} href={''}>
                    {err.message}
                </Link>
                <br />
                <GravityText color="secondary" ellipsis>
                    <b>Строка</b>: {err.line}, <b>Файл</b>: {err.file}
                </GravityText>
            </>
        ),
        width: 300,
    },
    {
        id: 'context',
        name: 'Контекст',
        template: (err: Err) => (
            <GravityText color="secondary" ellipsis>
                {err.context}
            </GravityText>
        ),
    },
    {
        id: 'actions',
        name: 'Действия',
        template: (err: Err) => (
            <Button view="flat" size="s" onClick={() => navigate(getErrorPath(err.id))}>
                Подробнее <Icon data={ArrowRight} size={14} />
            </Button>
        ),
        width: 120,
    },
];
