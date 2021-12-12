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
            path: '/dashboard/reg_dia',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/reg_vac',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/vac_im',
            element: <DashboardDefault />
        },
        {
            path: '/utils/vac_enroll',
            element: <VacineEnroll />
        },
        {
            path: '/utils/side_effect_report',
            element: <SideEffectReport />
        },
        {
            path: '/user/side_effect_enroll',
            element: <SideEffectEnroll />
        },
        {
            path: '/user/shop_enroll',
            element: <ShopEnroll />
        }
    ]
};

export default MainRoutes;
