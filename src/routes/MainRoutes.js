import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const Dashboarddiagnosis = Loadable(lazy(() => import('views/diagnosis')));
const Dashboardvaccinate = Loadable(lazy(() => import('views/vaccinate')));
const DashboardvaccineImf = Loadable(lazy(() => import('views/utilities/VaccineImfor')));
const Diatraffic = Loadable(lazy(() => import('views/utilities/diatraffic')));

// page routing
const MallVisitEnroll = Loadable(lazy(() => import('views/utilities/MallVisitEnroll')));
const SideEffectEnroll = Loadable(lazy(() => import('views/utilities/SideEffectEnroll')));
const Diatrafficenroll = Loadable(lazy(() => import('views/utilities/Diatrafficenroll')));
// utilities routing
const VacineEnroll = Loadable(lazy(() => import('views/utilities/VacineEnroll')));
const SideEffectReport = Loadable(lazy(() => import('views/utilities/SideEffectReport')));

// ==============================|| MAIN ROUTING ||============================== //

function MainRoutes(isLogin) {
  return {
    path: '/',
    element: isLogin ? <MainLayout /> : <Navigate to="/pages/login" />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardDefault />
      },
      {
        path: '/dashboard/regdia',
        element: <Dashboarddiagnosis />
      },
      {
        path: '/dashboard/regvac',
        element: <Dashboardvaccinate />
      },
      {
        path: '/dashboard/vacim',
        element: <DashboardvaccineImf />
      },
      {
        path: '/dashboard/diatraffic',
        element: <Diatraffic />
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
        path: '/user/diatrafficenroll',
        element: <Diatrafficenroll />
      },
      {
        path: '/user/sideeffectenroll',
        element: <SideEffectEnroll />
      },
      {
        path: '/user/mallvisitenroll',
        element: <MallVisitEnroll />
      }
    ]
  };
}

export default MainRoutes;
