// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: '사용자 기능',
  type: 'group',
  children: [
    {
      id: 'mall-visit/enroll',
      title: '방문지 등록',
      type: 'item',
      url: '/user/mall-visit/enroll',
      icon: icons.IconKey,
      breadcrumbs: false
    },
    {
      id: 'diatrafficenroll',
      title: '확진자 등록',
      type: 'item',
      url: '/user/diatrafficenroll',
      icon: icons.IconKey,
      breadcrumbs: false
    },
    {
      id: 'side-effect/enroll',
      title: '부작용 신고',
      type: 'item',
      url: '/user/side-effect/enroll',
      icon: icons.IconKey,
      breadcrumbs: false
    }
  ]
};

export default pages;
