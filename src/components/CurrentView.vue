<template>
    <loginPage v-if="this.$store.state.user.id == -1"/>
    <theFeedPage v-else/>
</template>

<script>
import LoginPage from '@/components/LoginPage.vue'
import TheFeedPage from '@/components/TheFeedPage.vue'
 export default {
   name: 'currentView',
   components: { LoginPage,TheFeedPage },
   data(){
       return{

       }
   },
 methods: {


        }
}
</script>
