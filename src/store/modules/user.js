import localStore from 'storejs'

const state = {
  token: ''
}

const mutations = {
  set_token: (state,data) => {
    state.token = data
    localStore.set('token',data)
  }
}

const actions = {
  login ({commit}) {
    return new Promise (resolve=> {
      commit('set_token', '123456789')
      resolve()
    })
  },
  logout ({commit}) {
    return new Promise(resolve => {
      commit('set_token', "")
      resolve()
    })
  }
}

const getters = {
  token: state => {
    return state.token
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}