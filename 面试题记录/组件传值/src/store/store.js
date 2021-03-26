import Vue from 'vue'

import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count: 0
}
const getters = {
  filter(state) {
    let newCount = state.count
    return newCount += '个'
  }
}
const mutations = {
  checkDivisibleByNum(state, num) {
    let remainder = state % num
    return remainder === 0
  },
  dobuleValue(state) {
    console.log(state.count);
    return state.count = state.count === 0 ? 1 : state.count * 2
  }
}
//异步修改状态
const actions = {
  addAction(context) {
    setTimeout(function () {
      console.log('异步执行 dobuleValue')
    }, 3000);
    context.commit('dobuleValue', 100)
  },
  reduceAction(context) {
    context.commit('mutations')
    console.log('异步执行 mutations')
  }
}

//封装代码 外部可以引用
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})