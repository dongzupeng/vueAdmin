import service from "@/request/service"

/**
 * 
 * @param {*} params 
 * @returns 获取学生列表
 */
export function getStudents(params) {
    return service({
        url: '/students',
        method: 'get',
        params
    })
}
/**
 * 
 * @param {*} id 
 * @returns 删除
 */
export function delStudents(id) {
    return service({
        url: `/students/${id}`,
        method: 'delete',
    })
}