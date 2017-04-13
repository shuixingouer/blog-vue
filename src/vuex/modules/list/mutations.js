import {LISTS_DATE} from './mutation-type'

const mutations = {
  // 获取频道菜单列表
  [LISTS_DATE] (state, data) {
    state.listsDate = data
  }
}

export default mutations
