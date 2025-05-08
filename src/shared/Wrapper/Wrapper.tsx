import React from 'react';
import block from 'bem-cn-lite';
import {Button, Icon, Theme, useThemeValue} from '@gravity-ui/uikit';
import {BellDot, Moon, Sun} from '@gravity-ui/icons';
import {DARK, LIGHT} from '../../app/constants';
import './Wrapper.scss';

const b = block('wrapper');

export type AppProps = {
    children: React.ReactNode;
    setTheme: (theme: Theme) => void;
};

export const Wrapper: React.FC<AppProps> = ({children, setTheme}) => {
    const theme = useThemeValue();
    const isDark = theme === DARK;
    return (
        <div className={b()}>
            <div
                className={b('theme-button')}
                style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}
            >
                <Button size="l" view="outlined">
                    <Icon data={BellDot} />
                </Button>
                <Button
                    size="l"
                    view="outlined"
                    onClick={() => {
                        setTheme(isDark ? LIGHT : DARK);
                    }}
                >
                    <Icon data={isDark ? Sun : Moon} />
                </Button>
            </div>
            <div className={b('layout')}>
                <div className={b('content')}>{children}</div>
            </div>
        </div>
    );
};
