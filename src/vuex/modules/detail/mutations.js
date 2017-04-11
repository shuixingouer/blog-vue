import {DETAIL_DATE} from './mutation-type'

const mutations = {
  // 获取频道菜单列表
  [DETAIL_DATE] (state, data) {
    state.detailDate = data
  }
}

export default mutations
