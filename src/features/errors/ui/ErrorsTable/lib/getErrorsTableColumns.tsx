import {Text as GravityText, Label, TableColumnConfig} from '@gravity-ui/uikit';
import {Err} from '@/entities/error/model/types';
import {formatDateTime} from '@/shared/lib/format/formatDate';

export const getErrorsTableColumns = (): TableColumnConfig<Err>[] => [
    {
        id: 'message',
        name: 'События',
        template: (err: Err) => (
            <>
                <GravityText>
                    <Label theme={'info'}>{formatDateTime(err.time)}</Label>
                    <GravityText style={{marginLeft: '4px'}}>{err.message}</GravityText>
                </GravityText>
            </>
        ),
    },
];
