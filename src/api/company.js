import request from '@/utils/request'
const baseURL = 'http://localhost:3000'

export function fetchList(params) {
  return request({
    params,
    url: `${baseURL}/company/list`,
    method: 'get'
  })
}

export function updatePass(params) {
  return request({
    url: `${baseURL}/company/updatePass`,
    data: {
      ...params
    },
    method: 'post'
  })
}
