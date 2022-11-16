import router from '@/router/index';
import { Message } from 'element-ui';
import { getCache } from '@/utils/setCache';
import NProgress from 'nprogress'; 
import 'nprogress/nprogress.css'; 

NProgress.configure({ showSpinner: false });

router.beforeEach(async (to, from, next) => {
    NProgress.start()
    const isLogin = getCache('token')
    if (to.path == '/login') {
        next()
        NProgress.done()
    } else {
        if (!isLogin) {
            Message({
                message: '请先登录',
                type: 'warning'
            });
            next('/login')
        } else {
            next()
        }
        next()
    }
});

router.afterEach(() => {
    NProgress.done();
});
