import request from '../request'

export const reqPwdLogin = ({
  userName,
  pwd,
  captcha
}) => {
  return request({
    url: '/login',
    data: {
      name: userName,
      pwd,
      captcha
    }
  })
}

export const reqCodeLogin = (phone, code) => {
  return request({
    url: '/login',
    data: {
      phone,
      code
    }
  })
}