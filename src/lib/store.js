import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const countries = {
  state: {
    list: ['USA', 'Canada', 'Mexico']
  }
}

const cityList = {
  state: {
    list: []
  },
  mutations: {
    addCity (state, city) {
      state.list.push(city)
    },
    deleteCity (state, city) {
      state.list.splice(state.list.indexOf(city), 1)
    }
  }
}

export default new Vuex.Store({
  modules: {
    america: countries,
    cities: cityList
  }
})
