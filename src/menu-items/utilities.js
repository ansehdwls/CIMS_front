// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
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
            url: '/utils/vacenroll',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: '부작용 신고기록 조회',
            type: 'item',
            url: '/utils/sideeffectreport',
            icon: icons.IconPalette,
            breadcrumbs: false
        }
    ]
};

export default utilities;
