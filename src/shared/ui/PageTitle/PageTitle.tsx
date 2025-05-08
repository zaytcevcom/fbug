import {Button, Text as GravityText, Icon} from '@gravity-ui/uikit';
import {FC} from 'react';
import {Plus} from '@gravity-ui/icons';

interface DataFetchErrorProps {
    title: string;
    addHandle?: () => void;
}

export const PageTitle: FC<DataFetchErrorProps> = ({title, addHandle}) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '24px 0',
            }}
        >
            <GravityText variant="header-1">{title}</GravityText>

            {addHandle && (
                <Button view="action" size="l" onClick={addHandle}>
                    <Icon data={Plus} size={16} />
                    Новый проект
                </Button>
            )}
        </div>
    );
};
