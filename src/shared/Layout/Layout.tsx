import {FC, useState} from 'react';
import {Icon, Menu, Theme} from '@gravity-ui/uikit';
import {Gear} from '@gravity-ui/icons';
import {AsideHeader} from '@gravity-ui/navigation';
import {Wrapper} from '../Wrapper';
import {Outlet} from 'react-router';
import {getMenuItems} from './MenuItems';
import {useNavigate} from 'react-router-dom';
import {getLogo} from './Logo';

interface LayoutProps {
    setTheme: (theme: Theme) => void;
}

export const Layout: FC<LayoutProps> = ({setTheme}) => {
    const [isCompact, setCompact] = useState(true);
    const navigate = useNavigate();
    const logo = getLogo();
    const menuItems = getMenuItems(navigate);

    return (
        <AsideHeader
            logo={logo}
            compact={isCompact}
            onChangeCompact={() => setCompact(!isCompact)}
            renderContent={() => (
                <Wrapper setTheme={setTheme}>
                    <Outlet />
                </Wrapper>
            )}
            menuItems={menuItems}
            renderFooter={() => (
                <Menu>
                    <Menu.Item
                        iconStart={<Icon size={16} data={Gear} />}
                        title={'Item with icon'}
                    />
                </Menu>
            )}
        />
    );
};
