<template>
    <div class="ui card">
        <div class="image">
            <iframe width="100%" height="auto" frameborder="0" style="border:0" :src="city.mapLink" allowfullscreen></iframe>
        </div>
        <div class="content" style="margin-left: 40px;">
            <p class="header">{{city.City}}</p>
            <div class="description">
                <p v-if="city.County">County: {{city.County}}</p>
                <p v-if="city.Municipality">Municipality: {{city.Municipality}}</p>
                <p>State: {{city.State}}</p>
                <p>Country: {{city.Country}}</p>
            </div>
        </div>
        <div class="extra content">
            <div class="ui buttons">
                <a :href="city.wiki" target="_blank" class="cardLink">
                    <div class="ui vertical animated blue basic button cardLink" tabindex="0">
                        <div class="hidden content">Wikipedia</div>
                        <div class="visible content"><i class="wikipedia icon"></i></div>
                    </div>
                </a>
                <a :href="city.citydata" target="_blank" class="cardLink">
                    <div class="ui vertical animated green basic button cardLink" tabindex="0">
                        <div class="hidden content">City-Data</div>
                        <div class="visible content"><i class="building outline icon"></i></div>
                    </div>
                </a>
                <a class='trash icon' @click="deleteCity(city)">
                    <div class="ui vertical animated red basic button" tabindex="0">
                        <div class="hidden content">Delete</div>
                        <div class="visible content"><i class='trash icon'></i></div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
  props: ['city'],
  methods: {
    deleteCity (city) {
      this.$emit('delete-city', city)
    }
  }
}
</script>
<style>
.cardLink{
    width: 90px;
    margin-right: 12px;
}
.cardButton{
    width: 100%;
}
</style>
