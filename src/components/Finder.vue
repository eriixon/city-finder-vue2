<template>
    <div class="ui container" id="finder-panel">
        <form class="ui form " @submit.prevent="sendRequest">
            <div class="fields">
                <div class=" field four wide">
                    <button id="sbtn" class="ui submit icon fluid button positive" type="submit" :disabled=isDisabled><i class="search icon"></i></button>
                </div>
                <div class="field four wide">
                    <select v-model.trim="searchCountry" style="height:37px !important">
                        <option value="" disabled selected>Select county</option>
                        <option v-for="country in countryList" v-bind:key="country">{{country}}</option>
                    </select>
                </div>
                <div class="field six wide">
                    <input placeholder="City/Town" type="text" id="select-city" v-model.trim="searchCity">
                </div>
            </div>
        </form >
    </div>
</template>

<script type="text/javascript">
import sweetalert from 'sweetalert'
import firebase from '../lib/firebase'

export default {
  data () {
    return { searchCountry: '', searchCity: '', countryList: this.$store.state.america.list }
  },
  computed: {
    isDisabled () {
      return (this.searchCountry.length > 0 && this.searchCity.length > 2) === false
    }
  },
  methods: {
    sendRequest () {
      const request = {
        'country': this.searchCountry,
        'city': this.searchCity.toLowerCase().replace(/\w\S*/g, txt => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() }),
        'id': this.uuidv4()
      }
      sweetalert({title: 'Loading', text: 'We are looking for this city', icon: 'info', buttons: false})
      firebase.askCityList(request, data => {
        if (data) {
          if (data.length !== 0) {
            data.forEach(city => this.$store.commit('addCity', city))
            sweetalert.close()
          } else sweetalert({title: 'Opps', text: 'Sorry, we can not find this city', icon: 'error', buttons: false})
        }
      })
      this.clearRequest()
    },
    uuidv4 () {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(6))
    },
    clearRequest () {
      [ this.searchCountry, this.searchCity ] = ['', '']
    }
  }
}
</script>
<style>
    #finder-panel {
        margin-top: 10%;
    }
</style>
