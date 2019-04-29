<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title class="_top-text">
          Fantasy Deck!
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class=""
    >
      <q-list>
        <q-item-label header>Navigation</q-item-label>
        <!-- <q-item clickable tag="a" target="_blank" href="http://v1.quasar-framework.org">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>v1.quasar-framework.org</q-item-label>
          </q-item-section>
        </q-item> -->
        <q-item clickable tag="a" target="_blank" @click="signout">
          <q-item-section avatar>
            <!-- <q-icon name="school" /> -->
          </q-item-section>
          <q-item-section>
            <q-item-label class="_link">SIGN OUT</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL,
    signout(){
      this.$store.dispatch("signOut")
    }
  }
}
</script>

<style lang="stylus">
.q-header
  height 75px;
.q-drawer
  opacity 0.9
  background #111
  color white
.q-toolbar
  height 100%


//__Self defined

._top-text
  user-select none

._link
  user-select none

</style>
