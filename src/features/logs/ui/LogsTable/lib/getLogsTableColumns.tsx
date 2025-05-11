import {NavigateFunction} from 'react-router';
import {Log} from '@/entities/log/model/types';
import {Button, Text as GravityText, Icon, Label, TableColumnConfig} from '@gravity-ui/uikit';
import {ArrowRight} from '@gravity-ui/icons';
import {getLogPath} from '@/app/url-generators';
import {formatDateTime} from '@/shared/lib/format/formatDate';

export const getLogsTableColumns = (navigate: NavigateFunction): TableColumnConfig<Log>[] => [
    {
        id: 'time',
        name: 'Время',
        template: (log: Log) => <GravityText>{formatDateTime(log.time)}</GravityText>,
        width: 180,
    },
    {
        id: 'level',
        name: 'Уровень',
        template: (log: Log) => {
            const colors = {
                DEBUG: 'utility',
                INFO: 'info',
                WARN: 'warning',
                ERROR: 'danger',
            } as const;

            return (
                <Label theme={colors[log.level]} size="m">
                    {log.level}
                </Label>
            );
        },
        width: 120,
    },
    {
        id: 'message',
        name: 'Сообщение',
        template: (log: Log) => (
            <GravityText ellipsis title={log.message}>
                {log.message}
            </GravityText>
        ),
        width: 300,
    },
    {
        id: 'context',
        name: 'Контекст',
        template: (log: Log) => (
            <GravityText color="secondary" ellipsis>
                {log.context}
            </GravityText>
        ),
    },
    {
        id: 'actions',
        name: 'Действия',
        template: (log: Log) => (
            <Button view="flat" size="s" onClick={() => navigate(getLogPath(log.id))}>
                Подробнее <Icon data={ArrowRight} size={14} />
            </Button>
        ),
        width: 120,
    },
];
