import Vue from 'vue'
import Vuex from 'vuex'

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
      // example
      mtg
    },
    state: {
      test1:"man oh man"
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
