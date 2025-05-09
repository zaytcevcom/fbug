import {NavigateFunction} from 'react-router';
import {Button, Text as GravityText, Icon} from '@gravity-ui/uikit';
import {ArrowRight} from '@gravity-ui/icons';
import {getErrorPath} from '@/app/url-generators';
import {Err} from '@/entities/error/model/types';

export const getErrorsTableColumns = (navigate: NavigateFunction) => [
    {
        id: 'time',
        name: 'Время',
        template: (err: Err) => <GravityText>{new Date(err.time).toLocaleString()}</GravityText>,
        width: 180,
    },
    {
        id: 'message',
        name: 'Сообщение',
        template: (err: Err) => (
            <GravityText ellipsis title={err.message}>
                {err.message}
            </GravityText>
        ),
        width: 300,
    },
    {
        id: 'file',
        name: 'Файл',
        template: (err: Err) => (
            <GravityText color="secondary" ellipsis>
                {err.file}
            </GravityText>
        ),
    },
    {
        id: 'line',
        name: 'Строка',
        template: (err: Err) => (
            <GravityText color="secondary" ellipsis>
                {err.line}
            </GravityText>
        ),
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
                Детали <Icon data={ArrowRight} size={14} />
            </Button>
        ),
        width: 120,
    },
];
