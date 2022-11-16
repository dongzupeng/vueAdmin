import service from "@/request/service"

export function login(data) {
    return service({
        url:'/login',
        method:'post',
        data
    })
}