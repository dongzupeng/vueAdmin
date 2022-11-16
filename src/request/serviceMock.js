import axios from 'axios'
import { getCache } from '@/utils/setCache'
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import { Message } from 'element-ui'

const serviceMock = axios.create({
    // baseURL:'/api',
    timeout: 5000
})

//请求拦截
serviceMock.interceptors.request.use((config) => {
    //请求之前做些什么
    NProgress.start()
    config.headers['token'] = getCache('token')
    return config
}, (error) => {
    return Promise.reject(error)
})

//响应拦截
serviceMock.interceptors.response.use((response) => {
    //响应数据做些什么
    const { code, msg } = response.data
    if (code !== "000") {
        Message({ message: msg || 'error', type: 'warning' })
    }
    NProgress.done()
    return response.data
}, (error) => {
    NProgress.done()
    return Promise.reject(error)
})

export default serviceMock