<template>
    <div class="ui container" style="margin-top: 5%;">
        <div class="ui link cards">
            <city v-for="city in cities" :key="city.id" v-on:delete-city="deleteCity" :city.sync="city"></city>
        </div>
    </div>
</template>

<script type="text/javascript">
import City from './City'
export default {
  props: ['cities'],
  components: {
    City
  },
  methods: {
    deleteCity (city) {
      console.log(city)
      this.$store.commit('deleteCity', city)
    }
  }
}
</script>
