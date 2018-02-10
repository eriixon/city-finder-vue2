<template>
  <div id="app">
    <finder></finder>
    <city-list v-bind:cities="cities"></city-list>
  </div>
</template>

<script>
import Finder from './components/Finder'
import CityList from './components/CityList'

export default {
  name: 'app',
  components: {
    Finder,
    CityList
  },
  data () {
    return {
      cities: this.$store.state.cities.list
    }
  }
}
</script>
