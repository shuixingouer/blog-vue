import vue from 'vue'
/**
 * post请求
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
const _post = ({ url, query }, commit) => {
  if (commit) commit('START_LOADING')
  let _url
  if (query) {
    _url = `http://localhost:8000/api${url}?${query}`
  } else {
    _url = `http://localhost:8000/api${url}`
  }
  return vue.http.post(_url).then((res) => {
    if (commit) commit('FINISH_LOADING')
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
export const setChannelMenus = ({ commit }) => {
  const url = '/wap2/channel/list'
  return _post({ url }, commit).then((json) => {
    console.log(json.status)
    if (json.status === 'SUCESS') {
      console.log(json.data[0])
      return commit('CHANNEL_MENU', json.data)
    }
    return Promise.reject(new Error('CHANNEL_MENU failure'))
  }).catch((error) => {
  // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
    return Promise.reject(error)
  })
}

