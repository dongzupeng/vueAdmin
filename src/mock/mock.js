import { LOGIN_URL, DELETE_DATA, GETDATA } from '../constants/API'
// 引入mockjs
const Mock = require('mockjs')

// 模拟登陆接口
Mock.mock(LOGIN_URL, (req, res) => {
    let item = JSON.parse(req.body);
    let username = item.username;
    let password = item.password;
    if (username === 'admin' && password === '123456') {
        return {
            'code': '000',
            'msg': '登陆成功',
            'data': {
                'orgCode': '35002',
                'token': 'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOiJhZG1pbiIsInVzZXJOYW1lIjoiYWRtaW4iLCJvcmdDb2RlIjoiMzUwMDAiLCJkZXB0Q29kZSI6IjM1MDAwIiwiYXVkIjoiYWRtaW4iLCJpc3MiOiJhZG1pbiIsImV4cCI6MTU5MzUzNTU5OH0.0pJAojRtT5lx6PS2gH_Q9BmBxeNlgBL37ABX22HyDlebbr66cCjVYZ0v0zbLO_9241FX9-FZpCkEqE98MQOyWw',
            }
        }
    } else {
        return {
            'code': '999',
            'msg': '登陆失败'
        }
    }

})
//用户信息
Mock.mock('/user/userinfo', 'get', {
    code:'000',
    msg: '请求成功',
    data:{
        id: "@id()",//得到随机的id,对象
        username: "藤原拓海",//随机生成中文名字
        // username: "admin",//随机生成中文名字
        date: "@date()",//随机生成日期
        avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",//生成图片,参数:size, background, foreground, text
        description: "@paragraph()",//描述
        ip: "@ip()",//IP地址
        email: "@email()"//email
    }  
})

// 处理get请求的url参数  "/user/list?pageSize=10&currentPage=1"
const getQuery = (url, name) => {
    const isFind = url.indexOf(name) !== -1
    if (isFind) {
        const queryArr = url.split('?')[1].split('&')
        for (let i = 0; i < queryArr.length; i++) {
            const result = queryArr[i].split('=')
            if (result[0] === name) {
                return result[1]
            }
        }
    }
    return null
}


//用户列表
Mock.mock('/user/list', 'get', {
    code: '000',
    msg: '请求成功',
    data: {
        // 生成十个如下格式的数据
        'list|1000': [
            {
                'id|+1': 1, // 数字从当前数开始依次 +1
                'age|18-40': 20, // 年龄为18-40之间的随机数字
                'sex|1': ['男', '女'], // 性别是数组中随机的一个
                name: '@cname', // 名字为随机中文名字
                email: '@email', // 随机邮箱
                isShow: '@boolean', // 随机获取boolean值
            },
        ],
    },
});

//用户信息
Mock.mock('/user/userInfo', 'get', {
    code: '000',
    msg: '请求成功',
    data: {
        // 生成十个如下格式的数据
        'list|1000': [
            {
                'id|+1': 1, // 数字从当前数开始依次 +1
                'age|18-40': 20, // 年龄为18-40之间的随机数字
                'sex|1': ['男', '女'], // 性别是数组中随机的一个
                name: '@cname', // 名字为随机中文名字
                email: '@email', // 随机邮箱
                isShow: '@boolean', // 随机获取boolean值
                father:'@cname',
                mather:"@cname",
                address:"@city(true)",
                school:"xxx大学",
                'phone|1-10': "★"
            },
        ],
    },
});
