export default [
    // {
    //     path:'/',
    //     redirect:'login',
    //     hidden:true,
    //     component: () => import("@/components/login-form.vue"),
    // },
    {
        path: '/login',
        name: "Login",
        hidden: true,
        component: () => import("@/components/login-form.vue"),
    },
    {
        path: '*',
        name: "Nofound",
        hidden: true,
        component: () => import("@/views/errorPage/404.vue"),
    },
    {
        path: '/home',
        name: "用户管理",
        iconClass: 'el-icon-user-solid',
        component: () => import("@/views/home.vue"),
        children: [
            {
                path: '/home/user',
                name: '用户列表',
                iconClass: 'el-icon-s-grid',
                component: () => import("@/views/user/user-list.vue"),
                meta: {
                    title: '用户列表',
                    path: '/home/user'
                },
            },
            {
                path: '/home/userinfo',
                name: '用户信息',
                iconClass: 'el-icon-info',
                component: () => import("@/views/user/info-list.vue"),
                meta: {
                    title: '用户信息',
                    path: '/home/userinfo'
                },
            }
        ]
    },
    {
        path: '/home',
        name: "组件使用",
        iconClass: 'el-icon-folder',
        component: () => import("@/views/home.vue"),
        children: [
            {
                path: '/home/useSelect',
                name: 'Select组件',
                iconClass: 'el-icon-check',
                component: () => import("@/views/useComponents/useSelect"),
                meta: {
                    title: 'Select组件',
                    path: '/home/useSelect'
                },
            },
            {
                path: '/home/useDialog',
                name: 'Dialog组件',
                iconClass: 'el-icon-chat-square',
                component: () => import("@/views/useComponents/useDialog"),
                meta: {
                    title: 'Dialog组件',
                    path: '/home/useDialog'
                },
            },
            {
                path: '/home/useForm',
                name: 'Form组件',
                iconClass: 'el-icon-s-order',
                component: () => import("@/views/useComponents/useForm"),
                meta: {
                    title: 'Form组件',
                    path: '/home/useForm'
                },
            },
            {
                path: '/home/useEditor',
                name: '富文本组件',
                iconClass: 'el-icon-edit-outline',
                component: () => import("@/views/useComponents/useEditor"),
                meta: {
                    title: '富文本组件',
                    path: '/home/useEditor'
                },
            }
        ]
    },
    {
        path: '/home',
        name: "地图",
        iconClass: 'el-icon-place',
        component: () => import("@/views/home.vue"),
        children: [
            {
                path: '/home/use3dmap',
                name: '3d地图组件',
                iconClass: 'el-icon-location-outline',
                component: () => import("@/views/map/use3dmap"),
                meta: {
                    title: '3d地图组件',
                    path: '/home/use3dmap'
                },
            },
            {
                path: '/home/useEarth',
                name: '卫星地球',
                iconClass: 'el-icon-location-information',
                component: () => import("@/views/map/useEarth"),
                meta: {
                    title: '卫星地球',
                    path: '/home/useEarth'
                },
            },


        ]
    },
    {
        path: '/home',
        name: "图表",
        iconClass: 'el-icon-data-analysis',
        component: () => import("@/views/home.vue"),
        children: [
            {
                path: '/home/barchart',
                name: '柱状图',
                iconClass: 'el-icon-s-data',
                component: () => import("@/views/echarts/barchart"),
                meta: {
                    title: '柱状图',
                    path: '/home/barchart'
                },
            },
            {
                path: '/home/linechart',
                name: '折线图',
                iconClass: 'el-icon-data-line',
                component: () => import("@/views/echarts/linechart"),
                meta: {
                    title: '折线图',
                    path: '/home/linechart'
                },
            },
            {
                path: '/home/piechart',
                name: '饼图',
                iconClass: 'el-icon-pie-chart',
                component: () => import("@/views/echarts/piechart"),
                meta: {
                    title: '饼图',
                    path: '/home/piechart'
                },
            },
            {
                path: '/home/relationchart',
                name: '关系图',
                iconClass: 'el-icon-share',
                component: () => import("@/views/echarts/relationchart"),
                meta: {
                    title: '关系图',
                    path: '/home/relationchart'
                },
            },
            {
                path: '/home/radarchart',
                name: '雷达图',
                iconClass: 'el-icon-bangzhu',
                component: () => import("@/views/echarts/radarchart"),
                meta: {
                    title: '雷达图',
                    path: '/home/radarchart'
                },
            },
        ]
    },
    {
        path: '/errorPage',
        name: "错误页面",
        iconClass: 'el-icon-error',
        component: () => import("@/views/errorPage"),
        children: [
            {
                path: '/errorPage/403',
                name: '403',
                component: () => import("@/views/errorPage/403"),
                meta: {
                    title: '403',
                    path: '/errorPage/403'
                },
            },
            {
                path: '/errorPage/404',
                name: '404',
                component: () => import("@/views/errorPage/404"),
                meta: {
                    title: '404',
                    path: '/errorPage/404'
                },
            },
            {
                path: '/errorPage/500',
                name: '500',
                component: () => import("@/views/errorPage/500"),
                meta: {
                    title: '500',
                    path: '/errorPage/500'
                },
            },

        ]
    },
    {
        path: '/home',
        name: "个人中心",
        iconClass: 'el-icon-s-home',
        component: () => import("@/views/home.vue"),
        children: [
            {
                path: '/home/homePage',
                name: '个人中心',
                iconClass: 'el-icon-s-home',
                component: () => import("@/views/personalCenter/homePage.vue"),
                meta: {
                    title: '个人中心',
                    path: '/home/homePage'
                },
            },
            {
                path: '/home/setting',
                name: '个人设置',
                iconClass: 'el-icon-s-tools',
                component: () => import("@/views/personalCenter/setting.vue"),
                meta: {
                    title: '个人设置',
                    path: '/home/setting'
                },
            },

        ]
    },
]