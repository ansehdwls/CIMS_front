import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// page routing
const ShopEnroll = Loadable(lazy(() => import('views/utilities/ShopEnroll')));
const SideEffectEnroll = Loadable(lazy(() => import('views/utilities/SideEffectEnroll')));

// utilities routing
const VacineEnroll = Loadable(lazy(() => import('views/utilities/VacineEnroll')));
const SideEffectReport = Loadable(lazy(() => import('views/utilities/SideEffectReport')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/dashboard',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/regdia',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/regvac',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/vacim',
            element: <DashboardDefault />
        },
        {
            path: '/utils/vacenroll',
            element: <VacineEnroll />
        },
        {
            path: '/utils/sideeffectreport',
            element: <SideEffectReport />
        },
        {
            path: '/user/sideeffectenroll',
            element: <SideEffectEnroll />
        },
        {
            path: '/user/shopenroll',
            element: <ShopEnroll />
        }
    ]
};

export default MainRoutes;
