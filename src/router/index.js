import Vue from "vue";
import Router from "vue-router"
import routes from './routes'

Vue.use(Router);


//解决vue路由重复导航错误
//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export default new Router({
    routes,
    mode: "hash"
})