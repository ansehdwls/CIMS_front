// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'COVID 정보 알림',
  type: 'group',
  children: [
    {
      id: 'reg_meas',
      title: '지역별 확진자 통계',
      type: 'item',
      url: '/dashboard/regdia',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'reg_vac',
      title: '지역별 백신접종자 통계',
      type: 'item',
      url: '/dashboard/vaccinate',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'vac_im',
      title: '백신 정보',
      type: 'item',
      url: '/dashboard/vaccine',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'traffic',
      title: '확진자 정보',
      type: 'item',
      url: '/dashboard/coronic',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
