<template>
    <div class="ui container" id="finder-panel">
        <div class="ui small form" @submit.prevent="sendRequest">
            <div class="three fields">
                <div class="field">
                    <select class="form-control" id="select-country" v-model.trim="searchCountry" required>
                        <option value="" disabled selected>Select county</option>
                        <option v-for="country in countryList" v-bind:key="country">{{country}}</option>
                    </select>
                </div>
                <div class="field">
                    <input placeholder="City/Town" type="text" id="select-city" v-model.trim="searchCity" required>
                </div>
                <div class="field">
                    <div class="ui submit icon fluid button"><i class="search icon"></i></div>
                </div>
            </div>

        </div>
    </div> 
</template>

<script type="text/javascript">

import VueSwal from 'vue-swal'

export default{

  data () {
    return {
        searchCountry: '',
        searchCity:'',
        countryList: this.$store.state.countries
    }
  },
  methods: {
    sendRequest () {
        request = {
            "country": this.searchCountry,
            "city": this.searchCity.toLowerCase().replace(/\w\S*/g, txt => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }),
            "id": this.uuidv4()
        };
        this.popupMessage("loading");
        this.$http.put('/askCityList', request).then(
            data  => {
                data.body.forEach(city => store.addCity(city));
                swal.close();
            },
                error => this.popupMessage(error.body)
            ).bind(this);
            this.clearRequest();
    },
    uuidv4 () {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(6))
        },
    clearRequest (){
           this.searchCountry = '';
            this.searchCity = '';
        },
    popupMessage (message){
            popupMessage = {}
            if (message == "loading") popupMessage  = { title: "Loading", text: "We are looking for this city", icon: "info", buttons: false };
            else popupMessage = { title: "Opps", text: message, icon: "error", buttons: false };
            this.$swal(popupMessage);
        }
    }
}
</script>
<style>
    #finder-panel {
        margin-top: 10%;
    }
</style>
