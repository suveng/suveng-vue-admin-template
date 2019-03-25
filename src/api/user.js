/**
 * @author suwenguang
 * @email suveng@163.com
 * since 2019/3/19
 * description:
 **/

import request from '@/utils/request'
import { params } from '@/utils/params'

export function getUserList(listQuery, currentPage, pageSize) {
  const data = { 'pageNum': currentPage, 'pageSize': pageSize }

  return request({
    url: '/springboot/user/getList',
    method: 'post',
    contentType: 'application/json',
    data: params(data)
  })
}
export function addUserTestData() {
  return request({
    url: '/springboot/user/addTestData',
    method: 'post',
    contentType: 'application/json',
    data: {}
  })
}

export function removeAll() {
  return request({
    url: '/springboot/user/removeAll',
    method: 'post',
    contentType: 'application/json',
    data: {}
  })
}

export function addOne(user) {
  return request({
    url: '/springboot/user/add',
    method: 'post',
    contentType: 'application/json',
    data: user
  })
}
