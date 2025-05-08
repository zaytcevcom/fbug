import React, {FC} from 'react';

interface PageContainerProps {
    children: React.ReactNode;
}

export const PageContainer: FC<PageContainerProps> = ({children}) => {
    return <div style={{maxWidth: '1400px', margin: '0 auto', padding: '24px'}}>{children}</div>;
};
