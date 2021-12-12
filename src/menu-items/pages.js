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
            id: 'shop_enroll',
            title: '가게등록',
            type: 'item',
            url: '/user/shop_enroll',
            icon: icons.IconKey,
            breadcrumbs: false
        },
        {
            id: 'side_effect_enroll',
            title: '부작용 신고',
            type: 'item',
            url: '/user/side_effect_enroll',
            icon: icons.IconKey,
            breadcrumbs: false
        }
    ]
};

export default pages;
