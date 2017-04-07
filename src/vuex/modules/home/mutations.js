import { UPDATE_DIRECTION } from './mutation-type'

const mutations = {
  [UPDATE_DIRECTION] (state, direction) {
    state.direction = direction
  }
}

export default mutations
