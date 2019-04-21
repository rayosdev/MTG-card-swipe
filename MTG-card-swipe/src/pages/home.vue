<template>
    <q-page 
        padding 
        class="flex flex-center"
        >
        <h1>Hola from Home</h1>
        <q-btn  @click="clear">Clear</q-btn>
    </q-page>
</template>
<script>
export default {
    name: 'Home',

    methods:{
        clear(){
            window.localStorage.clear()
            this.$router.push('/login')
        }

    }
}
</script>

