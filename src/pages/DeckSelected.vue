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
    axios.get('https://api.scryfall.com/cards?page=3')
      .then(res => {
        this.cards = res.data.data
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
