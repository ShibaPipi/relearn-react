import request from './request'

export function getMobileCaptcha() {
  return request(111111)
}

export function login(mobile) {
  return request(mobile)
}
