<template>
    <b-card border-variant="primary" no-body >
            <b-card-header header-bg-variant="transperent"> header </b-card-header>
            <b-card-img top src="https://placekitten.com/380/200" alt="Image"/>
            <PawIcon style="font-size:60px; color:#007bff; float:left;" />
            <p>Likes 100</p>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </b-card>

</template>


<script>
// import LoginBox from '@/components/LoginBox.vue'
// import SignUp from '@/components/SignUp.vue'
import PawIcon from "vue-material-design-icons/paw.vue"


 export default {
   name: 'Posts',
   components:{ PawIcon} ,
   data(){
       return {

    }
},
   methods: {

        }
 }
</script>

<style scoped>

</style>
