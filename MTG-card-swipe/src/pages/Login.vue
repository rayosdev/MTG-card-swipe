<template>
  <q-page padding class="flex ">
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 600px">
        <q-card>

          <q-tabs
            v-model="tab"
            dense
            class="shadow-5"
            align="justify"
            narrow-indicator
          >
            <q-tab name="login" label="Login" />
            <q-tab name="signup" label="Signup" />
          </q-tabs>

          <q-tab-panels v-model="tab" animated class="shadow-5">
          <!-- <q-tab-panels value="" v-model="tab" class="shadow-5"> -->

            <q-tab-panel name="login">
              <div class="items-start">
                <form @submit.prevent="simulateSubmit" class="q-pa-md">
                  <div class="text-h6 q-ma-lg">Your decks are waiting</div>
                  <q-input
                    value=""
                    class="q-mb-lg"
                    dark
                    v-model="email"
                    filled
                    type="email"
                    hint="Email"
                    ref="loginEmail"
                    :error="loginEmailError"
                    >
                    <template v-slot:append>
                      <q-icon name="mail" />
                    </template>
                  </q-input>
                  <q-input
                    value=""
                    dark
                    v-model="password"
                    filled
                    :type="isPwd ? 'password' : 'text'"
                    hint="Password"
                    ref="loginPassword"
                    :error="loginPasswordError"
                    >
                    <template v-slot:append>
                      <q-icon
                        v-slot:prepend
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                  </q-input>
                  <q-btn
                    type="submit"
                    :loading="submitting"
                    color="primary"
                    label="Login"
                    class="q-ma-lg"
                    >
                      <template v-slot:loading>
                        <q-spinner-facebook />
                      </template>
                  </q-btn>
                </form>
              </div>
            </q-tab-panel>

            <q-tab-panel name="signup">
              <q-form autocomplete="off" @submit.prevent="simulateSubmit" class="q-pa-md">
                <div class="items-start">
                  <div class="text-h6 q-mb-lg">Signup to start makeing your own fantasy deck</div>
                  <q-input
                    clearable
                    value=""
                    class="q-mb-lg"
                    dark
                    v-model="signup.email"
                    filled
                    type="email"
                    hint="Email"
                    >
                    <template v-slot:append>
                      <q-icon name="mail" />
                    </template>
                  </q-input>
                  <q-input
                    value=""
                    dark
                    v-model="signup.password"
                    filled
                    :type="isPwd ? 'password' : 'text'"
                    hint="Type Password"
                    ref="loginPassword"
                    :error="loginPasswordError"
                    >
                    <template v-slot:append>
                      <q-icon
                        v-slot:prepend
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                  </q-input>
                  <q-input
                    value=""
                    dark
                    v-model="signup.repassword"
                    filled
                    :type="isPwd ? 'password' : 'text'"
                    hint="Re-type the Password" 
                    ref="loginPassword"
                    :error="loginPasswordError"
                    >
                    <template v-slot:append>
                      <!-- <q-icon
                        v-slot:prepend
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      /> -->
                    </template>
                  </q-input>

                  <q-btn 
                    color="primary" 
                    @click="handelClick" 
                    label="Signup" 
                    class="q-ma-lg" 
                    />
                </div>
              </q-form>
            </q-tab-panel>

          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>

export default {
  name: 'PageIndex',
  data () {
    return {
      test: "Halla mundo",
      tab: 'signup',

      isPwd: true,

      email: '',
      password: '',

      signup:{
        email:'',
        password:'',
        repassword:'',
      },
      // signUpEmail:'',

      submitting: false,

      loginEmailError: false,
      loginPasswordError: false,
    }
  },
  methods:{
    handelClick(e){

    },
    simulateSubmit () {
      this.submitting = true

      if(localStorage.getItem('password') != this.password){
        this.loginPasswordError = true
        this.password = ""
        this.$refs.loginPassword.focus()
      }

      if(localStorage.getItem('email') != this.email){
        this.loginEmailError = true
        this.email = ""
        this.$refs.loginEmail.focus()
      }

      if(!this.loginEmailError && !this.loginPasswordError){
        localStorage.setItem('user',true)
      }


      if(this.loginEmailError || this.loginPasswordError){
        this.submitting = false
        setTimeout(() =>{
          this.loginEmailError = false
          this.loginPasswordError = false
        }, 1000)
      }



      setTimeout(() => {
        if(localStorage.getItem('user')){
          this.$router.push('/')
        }
        this.submitting = false
      }, 1000)
    }
  },
  created(){

    localStorage.setItem('email','bob@n.no')
    localStorage.setItem('password','123')

  }
}

</script>

<style lang="stylus" scoped>

  // .q-input
  //   height 20px
  // div.q-field.row.no-wrap.items-start.q-mb-lg.q-input.q-field--filled.q-field--float.q-field--dark.q-field--with-bottom
  // .q-field--with-bottom > div
  // .q-field__inner.relative-position.col.self-stretch.column.justify-center
  //   background green!important
  //   border 12px solid red


  .q-page>div
    width 80vw
    margin 0 auto

  .q-page>div>div
    margin 0 auto

  .q-card
    background rgba(255,0,0,0)
    border none

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
    min-height 370px
    min-width 80%

  .q-tab-panel
    margin 0 auto
    width 100%
    max-width 500px
    overflow-y:hidden

  .q-btn
    padding 0 40px

  .q-tab--active
    background #337;


    // #q-app > div > div.q-page-container.q-layout__section--animate > main > div > div > div > div.q-tab-panels.q-panel-parent.shadow-5 > div > div > div > form > div.text-h6.q-ma-lg
@media screen and (max-width: 510px)
  .text-h6
    margin 0
    margin-bottom 10px
    color white
    font-size 1.2em
  .q-layout__section--animate > main > div
    margin 0
    padding 0
    display flex
    // align-items center
    justify-content center
    width 100%
  .q-tab-panel
    padding 0
    padding-bottom 0
    max-width 300px


</style>

