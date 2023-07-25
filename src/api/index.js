
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

//更新
export const doUpdata = (data = {},id,Authorization ) => {
    return request({
        url:`/api/v1/picture/${id}`,
        method: 'PATCH',
        headers: {'Authorization': Authorization},
        data,
    })
}

//删除
export const doDelete = (id,Authorization ) => {
    return request({
        url: `/api/v1/picture/${id}`,
        method: 'DELETE',
        headers: {'Authorization': Authorization},
    })
}

//详情
export const doDetail = (id,Authorization ) => {
    return request({
        url: `/api/v1/picture/${id}`,
        method: 'GET',
        headers: {'Authorization': Authorization},
    })
}

// 我的收藏
export const doCollectList = () => {
    return request({
        url:`/api/v1/collect?current=2&length=10`,
        method: 'GET',
    })
}

//更新用户信息
export const doUpdateUserInformation = (data = {},Authorization ) => {
    return request({
        url:`/api/v1/user/profile`,
        method: 'PATCH',
        headers: {'Authorization': Authorization},
        data,
    })
}

//用户列表
export const doUserList = (Authorization ) => {
    return request({
        url:`/api/v1/user?current=10&length=10`,
        method: 'GET',
        headers: {'Authorization': Authorization},
    })
}

//用户详情
export const doUserDetails = (id,Authorization ) => {
    return request({
        url:`/api/v1/user/${id}`,
        method: 'GET',
        headers: {'Authorization': Authorization},
    })
}

//修改密码
export const doUpdatePassword = (data = {},Authorization ) => {
    return request({
        url:`/api/v1/user/update-password`,
        method: 'PATCH',
        headers: {'Authorization': Authorization},
        data,
    })
}

//重置密码
export const doResetPassword = (data = {}) => {
    return request({
        url:`/api/v1/user/reset-password`,
        method: 'PATCH',
        data,
    })
}

// 点赞
export const doLike = (pictureId) => {
    return request({
        url:`/api/v1/like`,
        method: 'POST',
        data: pictureId,
    })
}

// 取消点赞
export const doCancellike = (pictureId) => {
    return request({
        url:`/api/v1/like`,
        method: 'DELETE',
        data: pictureId,
    })
}

// 收藏
export const doCollect = (pictureId) => {
    return request({
        url:`/api/v1/collect`,
        method: 'POST',
        data: pictureId,
    })
}

// 取消收藏
export const doCancelCollect = (pictureId) => {
    return request({
        url:`/api/v1/collect`,
        method: 'DELETE',
        data: pictureId,
    })
}