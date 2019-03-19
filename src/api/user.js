/**
 * @author suwenguang
 * @email suveng@163.com
 * since 2019/3/19
 * description:
 **/

import request from '../utils/request'

export function getUserList() {
  console.log(request({
    url: '/springboot/user/getList',
    method: 'post'
  }))
  return null
}
