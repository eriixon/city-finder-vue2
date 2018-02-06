import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  cityList: [],
  countries: ['USA', 'Canada', 'Mexico'],
  addCity: function (city) {
    this.state.cityList.push(city)
  },
  removeTodo: function (todo) {
    this.todos.splice(this.todos.indexOf(todo), 1)
  },
  deleteCity: function (city) {
    this.state.cityList.splice(this.state.cityList.indexOf(city), 1)
  }
}
export default new Vuex.Store({
  state
})