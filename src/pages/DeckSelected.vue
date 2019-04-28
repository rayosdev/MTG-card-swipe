<template>
  <q-page>
    <h1>Deck</h1>
  </q-page>
</template>

<script>
export default {
  methods: {},

  created() {
    console.log("------test");
    console.log(this.products);
    // console.log(this.$store.state);
  },

  computed: {
    products() {
      return this.$store.state.products
    }
  }
};
</script>

<style lang="stylus" scoped>

h1
    color red
    padding 12px
    margin 0!important

</style>
