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
            url: '/user/shopenroll',
            icon: icons.IconKey,
            breadcrumbs: false
        },
        {
            id: 'sideeffectenroll',
            title: '부작용 신고',
            type: 'item',
            url: '/user/sideeffectenroll',
            icon: icons.IconKey,
            breadcrumbs: false
        }
    ]
};

export default pages;
