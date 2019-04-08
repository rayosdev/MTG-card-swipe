<template>
  <q-page padding class="flex flex-center">
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 600px">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="bg-grey-3 shadow-5"
            align="justify"
            narrow-indicator
          >
            <q-tab name="login" label="Login" />
            <q-tab name="singup" label="Singup" />
          </q-tabs>
          <q-tab-panels v-model="tab" animated class="shadow-5">

            <q-tab-panel name="login">  
              <div class="items-start">
                <div class="text-h6 q-ma-lg">Your decks are waiting</div>
                <q-input class="q-mb-lg" dark v-model="email" filled type="email" hint="Email">
                  <template v-slot:append>
                    <q-icon name="mail" />
                  </template> 
                </q-input>
                <q-input dark v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password">
                  <template v-slot:append>
                    <q-icon
                      v-slot:prepend 
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
              </div>
            </q-tab-panel>

            <q-tab-panel v-model="tab" name="singup">
              <div class="text-h6">Signup to start makeing your own fantasy deck</div>

            </q-tab-panel>
          
          </q-tab-panels>  
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      tab: 'Login',

      password: '',
      isPwd: true,

      email: '',
    }
  }

}
</script>
<style lang="stylus">
  .q-page
    background #333

  .q-page>div
    position relative
    top -12vh
    min-width 80vw 
  .q-card
    background rgba(255,0,0,0)
    border none style color

  .q-tabs
    border-radius 10px 10px 0 0!important

  .q-tab
    background #115
    color white

  .q-tab-panels
    min-height 40vh
    background #337
    color white
    text-align center
    width 80vw 

</style>

