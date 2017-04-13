import vue from 'vue'
/**
 * post请求
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
const _post = ({ url, query }, commit) => {
  let _url
  if (query) {
    _url = `api/date/detail/${url}?${query}`
  } else {
    _url = `api/date/detail/${url}`
  }
  return vue.http.post(_url).then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return res.data
    }
    return Promise.reject(new Error(res.status))
  })
}

/**
 * 获取正在热映电影列表
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} page             页数
 * @param  {Number} count             每页数量
 * @return {Promise}                  Promise
 */
export const setDetailDate = ({ commit }) => {
  const url = '20170110.json'
  return _post({ url }, commit).then((json) => {
    console.log(json.status)
    if (json.status === 'SUCESS') {
      console.log(json.data[0])
      return commit('DETAIL_DATE', json.data)
    }
    return Promise.reject(new Error('DETAIL_DATE failure'))
  }).catch((error) => {
  // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
    return Promise.reject(error)
  })
}

