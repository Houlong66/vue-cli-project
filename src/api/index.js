import request from '@/utils/request'

export default {
  test() {
    return request({
      url: '/test',
      method: 'get'
    })
  }
}