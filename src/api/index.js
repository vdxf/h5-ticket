
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

// 登录


