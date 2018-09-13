<template>
    <b-card  v-on:click="likePost" border-variant="primary" >
            <b-card-header header-bg-variant="transperent"> header </b-card-header>
            <b-card-img top src="https://placekitten.com/380/200" alt="Image"/>
            <PawIcon class="icon-paw" v-bind:style="{color:pawColor}" />
            <p>Likes 100</p>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> -->
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
           liked:false,
           pawColor:"#007bff"
    }
},
   methods: {
       likePost()
       {
           if(this.liked)
           {
               this.pawColor= "#007bff";
               this.liked = false;
           }
           else
           {
               this.pawColor="#A9A9A9"
               this.liked = true;
           }

       }

        }
 }
</script>

<style scoped>
    .icon-paw{
        font-size:50px;
    }

</style>
