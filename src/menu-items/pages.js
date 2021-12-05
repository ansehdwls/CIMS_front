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
            id: 'authentication',
            title: '가게등록',
            type: 'item',
            icon: icons.IconKey,
            breadcrumbs: false
        },
        {
            id: 'authentication',
            title: '부작용 신고',
            type: 'item',
            icon: icons.IconKey,
            breadcrumbs: false
        }
    ]
};

export default pages;
