import Vue from 'vue'
import Vuex from 'vuex'

// import auth from './auth'
import { auth } from 'firebase'

import mtg from './modules/mtg'



// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {


  const Store = new Vuex.Store({
    modules: {
      mtg,
    },
    state: {
      test1:"man oh man",
      user: {},
      error: null,
      loading: false
    },
    getters: {
      user(state){return state.user},
      error(state){return state.error}
    }
    ,
    mutations: {
      SET_USER(state, payload){
        state.user = payload
      },
      SET_LOADING(state, payload){state.loading = payload},
      SET_ERROR(state, payload){state.error = payload},
      CLEAR_ERROR(state){state.error = null},
      signout({ state }){
        console.log("test")
        commit('SET_USER', null)
        this.$router.push('/')
      }
    },
    actions: {
      // signUp({commit}, payload){
      //   commit('SET_USER', payload)
      // }
      signUp({ commit }, payload){
        commit('SET_LOADING', true)
        commit('CLEAR_ERROR')
        auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          
          const newUser = {
            id: user.uid,
            extraInfo: null
          }
          commit('SET_USER', newUser)
          commit('SET_LOADING', false)
        })
        .catch(err => {
            commit('SET_ERROR', err)
            commit('SET_LOADING', false)
          })
      },
      login({ commit }, payload){
        commit('SET_LOADING', true)
        commit('CLEAR_ERROR')
        auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {

            const newUser = {
              id: user.uid,
              extraInfo: null
            }
            commit('SET_USER', newUser)
            commit('SET_LOADING', false)
          })
          .catch(err => {
            commit('SET_ERROR', err)
            commit('SET_LOADING', false)
          })
      },
      

    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
