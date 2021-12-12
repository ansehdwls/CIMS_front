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
            url: '/utils/vac_enroll',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: '부작용 신고기록 조회',
            type: 'item',
            url: '/utils/side_effect_report',
            icon: icons.IconPalette,
            breadcrumbs: false
        }
    ]
};

export default utilities;
