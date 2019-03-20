/**
 * @author suwenguang
 * @email suveng@163.com
 * since 2019/3/20
 * description:
 **/
export function params(json) {
  return Object.keys(json).map(function(key) {
    // body...
    return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
  }).join('&')
}
