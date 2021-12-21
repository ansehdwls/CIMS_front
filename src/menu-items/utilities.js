// assets
import { IconTypography, IconPalette, IconKey, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconKey
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: '관리자 기능',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: '백신 등록',
      type: 'item',
      url: '/utils/vaccine/enroll',
      icon: icons.IconKey,
      breadcrumbs: false
    },
    {
      id: 'coronic/enroll',
      title: '확진자 등록',
      type: 'item',
      url: '/utils/coronic/enroll',
      icon: icons.IconKey,
      breadcrumbs: false
    },
    {
      id: 'side-effect',
      title: '부작용 조회',
      type: 'item',
      url: '/utils/side-effect',
      icon: icons.IconKey,
      breadcrumbs: false
    }
  ]
};

export default utilities;
