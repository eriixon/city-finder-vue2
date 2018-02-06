<template>
    <div class="row" id="spanel">
        <form class="form" @submit.prevent="sendRequest">
            <div class="col-md-2 col-md-offset-1">
                <button class="btn" id="btn-submit"><i class="fas fa-search"></i></button>
            </div>
            <div class="col-md-3">
                <div class="input-group">
                    <span class="input-group-addon">Country</span>
                    <select class="form-control" id="select-country" v-model.trim="searchCountry" required>
                        <option v-for="country in countryList" v-bind:key="country">{{country}}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-3">
                <div class="input-group">
                    <span class="input-group-addon">City</span>
                    <input class="form-control" id="select-city" v-model.trim="searchCity" required>
                </div>
            </div>
        </form>
    </div> 
</template>

<script type="text/javascript">

import sweetalert from 'sweetalert'

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
            this.$sweetalert(popupMessage);
        }
    }
}
</script>