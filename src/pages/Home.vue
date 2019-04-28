<template>
  <q-page class>
    <div class="row flex flex-center">
      <h6 id="top-text" class="text-h6">Select a Seck</h6>
    </div>
    <q-list class="flex flex-center col row items-start q-gutter-sm">
      <q-item>
        <q-card class="my-card cursor-pointer" @click="selectDeck">
          <q-img
            src="https://img.scryfall.com/cards/large/en/cn2/126.jpg?1517813031"
            transition="slide-right"
            spinner-color="white"
          >
            <div class="absolute-bottom">
              <div class="text-h6">Random Cards</div>
              <div class="text-subtitle2">by Jared Isaksen</div>
            </div>
          </q-img>
        </q-card>
      </q-item>
    </q-list>

    <q-page-sticky position="bottom-right" :offset="[30, 30]">
      <q-btn @click="prompt" fab icon="add" color="accent"/>
    </q-page-sticky>
    <q-btn color="black" id="clearBtn" @click="clear">Clear</q-btn>
  </q-page>
</template>
<script>
// import testUser from '../data/testUser.js'
// console.log(testUser.decks)

import Scry from "scryfall-sdk";
// Scry.Cards.byName("Blood Scrivener").then(result => console.log(result.name))
// Scry.byName("Blood Scrivener").then(res => console.log(res));

export default {
  name: "Home",
  debug: true,
  data() {
    return {
      slide: "style"
    };
  },
  methods: {
    selectDeck(){
      console.log("test")
      this.$router.push("/deck")
    },
    clear() {
      window.localStorage.clear()
      this.$router.push("/login")
    },
     prompt () {
      this.$q.dialog({
        title: 'Name New Deck',
        message: 'What will you call your new Deck?',
        prompt: {
          model: '',
          type: 'text' // optional
        },
        cancel: true,
        persistent: true,
        color: 'secondary'
      }).onOk(data => {
        console.log('>>>> OK, received', data)
      }).onCancel(() => {
        console.log('>>>> Cancel')
      }).onDismiss(() => {
        console.log('I am triggered on both OK and Cancel')
      })
    }
  }
};
</script>



<style lang="stylus" scoped>

$primary   = #000000
$secondary = #9345b5
$accent    = #9345b5

$positive  = #21BA45
$negative  = #cf3244
$info      = #64ddf5
$warning   = #f7e277

#top-text
  color white
  opacity 0.5
  margin 20px 0 20px 0

div.q-carousel.q-panel-parent.bg-none.text-white.shadow-1.rounded-borders.q-carousel--arrows.q-carousel--navigation > div.q-carousel__slides-container > div > div 
  padding: 20px
  margin: 0
  // border 10px soid red


.q-card 
  border-radius 15px
  .q-img 
    min-width: 220px
    object-fit: cover
    background #222
  

  .q-img__content > div 
    padding: 10%
    height: 40%
  

  .text-h6 
    // padding-top 3em
    font-size: 1.1em
  

  .text-subtitle2 
    font-size: 0.8em



@media screen and (max-width: 510px)
  
  #top-text
    font-size: 1.1em
    margin 20px 0 20px 0
  
  .q-card 
    .q-img 
      min-width: 120px
      object-fit: cover

      .q-img__content > div 
        padding: 10%
        padding-top 15%
        height: 60%

        .text-h6 
          // padding-top 3em
          line-height 1.3rem
          font-size: 0.9em







#clearBtn 
  position: fixed
  bottom: 5%
  left: 5%



</style>
