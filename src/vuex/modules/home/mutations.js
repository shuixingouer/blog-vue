import { CHANNEL_MENU } from './mutation-type'

const mutations = {
  // 获取频道菜单列表
  [CHANNEL_MENU] (state, data) {
    state.channelMenus = data
  }
}

export default mutations
