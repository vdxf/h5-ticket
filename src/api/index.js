
import request from '@/utils/request'

// 发送邮件
export const doEmailSend = (data = {}) => {
    return request({
        url: '/api/v1/common/email/send',
        method: 'POST',
        data,
    })
}

// 注册
export const doRegister = (data = {}) => {
    return request({
        url: '/api/v1/auth/signup',
        method: 'POST',
        data,
    })
}
// 登录

export const doLogin = (data = {}) => {
    return request({
        url: '/api/v1/auth/signin',
        method: 'POST',
        data,
    })
}
//文件上传
export const doFile = ( fromData, Authorization ) => {
    return request({
        url: '/api/v1/common/upload/image',
        method: 'POST',
        headers: {'Authorization': Authorization},
        data: fromData,
    })
}

// 创建图片
export const doGain = ( data,Authorization ) => {
    return request({
        url: '/api/v1/picture',
        method: 'POST',
        headers: {'Authorization': Authorization},
        data,
    })
}

//获取图片列表
export const doTabulation = (Authorization ) => {
    return request({
        url: '/api/v1/picture?current=2&length=10',
        method: 'GET',
        headers: {'Authorization': Authorization},
    })
}



