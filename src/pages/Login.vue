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

            <!-- LOGIN -->
            <q-tab-panel name="login">
              <div class="items-start">
                <form @submit.prevent="simulateSubmit('login')" class="q-pa-md">
                  <div
                    class="text-h6 q-ma-lg">Your decks are waiting</div>
                  <q-input
                    required
                    value=""
                    class="q-mb-lg"
                    dark
                    v-model="login.email"
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
                    required
                    value=""
                    dark
                    v-model="login.password"
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

            <!-- SIGNUP -->
            <q-tab-panel name="signup">
              <form autocomplete="off" @submit.prevent="simulateSubmit('signup')" class="q-pa-md">
                <div class="items-start">
                  <div class="text-h6 q-mb-lg">Signup to start makeing your own fantasy deck</div>
                  <q-input
                    reqiured
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
                    reqiured
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
                    reqiured
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

                    <!-- @click="handelClick" -->
                  <q-btn 
                    type="submit"
                    :loading="submitting"
                    color="primary"  
                    label="Signup" 
                    class="q-ma-lg" 
                    >
                    <template v-slot:loading>
                        <q-spinner-facebook />
                    </template>
                  </q-btn>
                </div>
              </form>
            </q-tab-panel>

          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
import {} from 'vuex'

export default {
  name: 'PageIndex',
  data () {
    return {
      test: "Halla mundo",
      tab: 'login',

      isPwd: true,

      email: '',
      password: '',

      login:{
        email:'',
        password:''
      },
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
    testClick(){
      alert("test")
    },
    handelClick(e){
      this.$q.notify({
        color: 'blue-grey-6',
        textColor: 'white',
        icon: 'warning',
        message: 'ALL IS WRONG',
        position: 'bottom-right',
        timeout: 4000
      })
    },
    simulateSubmit (type) {
      this.submitting = true

      if(type == 'login'){
        this.$store.dispatch('login', this.login)
      }

      if(this.loginEmailError || this.loginPasswordError){
        this.submitting = false
        setTimeout(() =>{
          this.loginEmailError = false
          this.loginPasswordError = false
        }, 1000)
      }
      setTimeout(() => {
        this.submitting = false
      }, 1000)

      if(type == 'signup'){
        const email = this.signup.email 
        const password = this.signup.password
        const repassword = this.signup.repassword

        // ___signup check
        if(email != ''){
          if( password != ''){
            if(password.length > 5){
              if(password === repassword){
                
                // ___Make user
                this.$store.dispatch('signUp', this.signup)
                
              }else{this.notify("Password's don't match")}  
            }else{this.notify('Pasword needs to be minimum 6 characters')}
          }else{this.notify('Missing Password')}
        }else{this.notify('Missing Email')}
      }

    },
    notify(msg){
      this.$q.notify({
        color: 'blue-grey-6',
        textColor: 'white',
        message: msg,
        position: 'bottom-right',
        timeout: 5000
      })
    }
  },
  watch: {
    user(value){
      if(value !== null && value !== undefined){
        this.$router.push('/')
      }
    },
    error(value){
      if(value !== null && value !== undefined){
        this.notify(value.message)
      }
    }
  },
  created(){
    
    console.log(this.error)
    localStorage.setItem('email','bob@n.no')
    localStorage.setItem('password','123')

  },
  computed:{
    user(){return this.$store.getters.user},
    error(){return this.$store.getters.error},
  }
}

</script>

<style lang="stylus" scoped>


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

