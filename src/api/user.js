/**
 * @author suwenguang
 * @email suveng@163.com
 * since 2019/3/19
 * description:
 **/
import axios from 'src/utils/http.js'
export function getUserList() {
  return axios.get('/springboot/user/getList')
}
