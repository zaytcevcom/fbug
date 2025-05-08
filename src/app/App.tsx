import {useState} from 'react';
import {Theme, ThemeProvider} from '@gravity-ui/uikit';
import {DARK} from './constants';
import {RouterProvider, createBrowserRouter} from 'react-router';
import {Layout} from '@/shared/Layout/Layout';
import {routes} from '@/app/routes';

const App = () => {
    const [theme, setTheme] = useState<Theme>(DARK);

    const router = createBrowserRouter([
        {
            element: <Layout setTheme={setTheme} />,
            children: routes,
        },
    ]);

    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
};

export default App;
