import { createRouter, createWebHistory } from 'vue-router';
import index from '../views/Index.vue'; // 导入路由对应的组件
import archives from "../views/Archives.vue";
import ExternalHtml from '../views/LoadGames.vue'; // 导入路由对应的组件
import PDFViewer from '../views/PDFViewers.vue'; // 导入路由对应的组件
import Tags from '../views/Tags.vue'; // 导入路由对应的组件
const routes = [
    {
        path: '/',
        name: 'Index',
        component: index
    },
    {
        path: '/index',
        redirect: '/'
    },
    {
        path: '/archives',
        name: 'Archives',
        component: archives
    },
    {
        path: '/tags',
        name: 'Tags',
        component: Tags
    },
    {
        path: '/game/:htmlFileName', // 使用动态参数指定外部 HTML 文件名
        name: 'ExternalHtml',
        component: ExternalHtml
    },
    {
        path: '/archives/:fileName', // 路由路径包含动态参数 fileName
        name: 'PDFViewer',
        component: PDFViewer,
        props: true // 启用路由参数作为组件 props
    },
    // 添加其他路由配置
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
