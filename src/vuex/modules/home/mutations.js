import { CHANNEL_MENU } from './mutation-type'

const mutations = {
  // ��ȡƵ���˵��б�
  [CHANNEL_MENU] (state, data) {
    state.channelMenus = data
  }
}

export default mutations
