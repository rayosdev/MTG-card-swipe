<template>
  <q-page>
    <q-list class="flex flex-center col row items-start q-gutter-sm">
      <q-item v-for="(card, index) in cards" v-bind:key="'card' + index">
        <q-card class="my-card cursor-pointer" @click="selectCard">
          <q-img
            :src="card.image_uris.large"
            transition="slide-right"
            spinner-color="white"
          >
          </q-img>
        </q-card>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import scry from 'scryfall-sdk'
import axios from 'axios'

export default {
  data(){
    return{
      cards: [],
      test: [1,2,3,4,5]
    }
  },
  methods: {
    selectCard(){

    }
  },
  computed: {
    // products() {
    //   return this.$store.state.products
    // }
  },
  created(){
    axios.get('https://api.scryfall.com/cards/search?order=edhrec&q=o%3A%22%7BT%7D%22')
      .then(res => {
        let cards = res.data.data
        cards = cards.filter(c => {
          if(c.hasOwnProperty("image_uris") == false){return false}
          return c.lang == "en" && c.image_uris.hasOwnProperty('large')
        })
        console.log(cards)
        this.cards = cards
      })
  }
};
</script>

<style lang="stylus" scoped>

.q-img
  min-width 200px

.q-card
  background #000000

</style>
