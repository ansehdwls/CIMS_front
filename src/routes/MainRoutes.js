import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const DashboardDiagnosis = Loadable(lazy(() => import('views/diagnosis')));
const DashboardVaccinate = Loadable(lazy(() => import('views/vaccinate')));
const Vaccine = Loadable(lazy(() => import('views/utilities/Vaccine')));
const Coronic = Loadable(lazy(() => import('views/utilities/Coronic')));

// page routing
const MallVisitEnroll = Loadable(lazy(() => import('views/utilities/MallVisitEnroll')));
const SideEffectEnroll = Loadable(lazy(() => import('views/utilities/SideEffectEnroll')));
const Diatrafficenroll = Loadable(lazy(() => import('views/utilities/Diatrafficenroll')));
// utilities routing
const VaccineEnroll = Loadable(lazy(() => import('views/utilities/VaccineEnroll')));
const SideEffect = Loadable(lazy(() => import('views/utilities/SideEffect')));

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
        element: <DashboardDiagnosis />
      },
      {
        path: '/dashboard/vaccinate',
        element: <DashboardVaccinate />
      },
      {
        path: '/dashboard/vaccine',
        element: <Vaccine />
      },
      {
        path: '/dashboard/coronic',
        element: <Coronic />
      },
      {
        path: '/utils/vaccine/enroll',
        element: <VaccineEnroll />
      },
      {
        path: '/utils/side-effect',
        element: <SideEffect />
      },
      {
        path: '/user/side-effect/enroll',
        element: <SideEffectEnroll />
      },
      {
        path: '/user/diatrafficenroll',
        element: <Diatrafficenroll />
      },
      {
        path: '/user/mall-visit/enroll',
        element: <MallVisitEnroll />
      }
    ]
  };
}

export default MainRoutes;
