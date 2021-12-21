// assets
import { IconShadow } from '@tabler/icons';

// constant
const icons = {
  IconShadow
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: '사용자 기능',
  type: 'group',
  children: [
    {
      id: 'mall-visit/enroll',
      title: '매장 방문 등록',
      type: 'item',
      url: '/user/mall-visit/enroll',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'side-effect/enroll',
      title: '부작용 신고',
      type: 'item',
      url: '/user/side-effect/enroll',
      icon: icons.IconShadow,
      breadcrumbs: false
    }
  ]
};

export default pages;
