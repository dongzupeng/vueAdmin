import serviceMock from "@/request/serviceMock"
import { LOGIN_URL } from "./API"

/**
 * 
 * @param {*} data 
 * @returns 登录
 */
export function login(data) {
    return serviceMock({
        url: LOGIN_URL,
        method: 'post',
        data
    })
}
/**
 * 
 * @returns 用户信息
 */
export function getUserInfo() {
    return serviceMock({
        url: "/user/userinfo",
        method: 'get',
    })
}
/**
 * 
 * @returns 获取用户列表
 */
export function getUser() {
    return serviceMock({
        url: "/user/list",
        method: 'get',
    })
}

/**
 * 
 * @returns 用户信息列表
 */
export function getUserInfoList() {
    return serviceMock({
        url: "/user/userInfo",
        method: 'get',
    })
}

