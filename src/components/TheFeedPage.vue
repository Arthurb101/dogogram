<template>
  <div class="loginPage">
    <h1 class="header-title fancy-font">This is the feed page</h1>
    <h2>{{state1}}</h2>
    <h2>{{state2}}</h2>
    <div class="container">
        <Posts/>
        <Posts/>




    </div><!-- /container -->
    <PostCreater v-bind:show="postCreaterShow" v-on:closeModal="postCreaterShow = false"/>
    <b-navbar style="text-align: center;" toggleable="md" type="dark" variant="info" fixed = "bottom">
        
        <div @click="postCreaterShow = true "><PlusCircleIcon class="icon-plus-circle" /></div>
    </b-navbar>
</div>

</template>


<script>
import Posts from '@/components/Posts.vue'
import PostCreater from '@/components/PostCreater.vue'
import PlusCircleIcon from "vue-material-design-icons/plus-circle.vue"
import { PortalTarget } from 'portal-vue'

 export default {
   name: 'TheFeedPage',
   components: { Posts,
       PlusCircleIcon,
       PostCreater
   },
   data(){
       return {
           state2: "haha",
           postCreaterShow: false

    }
},
computed: {
    state1 () {
        console.log("this is the state ",this.$store.state.user.userID)
      return this.$store.state.user.userID;
    }
},
   methods: {


        }
 }
</script>

<style scoped>
 /* https://color.adobe.com/%EB%B3%91%EC%9B%90-%EC%98%81%EC%88%98%EC%A6%9D-%ED%85%8C%EB%A7%88-color-theme-10646528/?showPublished=true */
 body {
     background-image: url("https://www.pexels.com/search/nature%20wallpaper/");

 }


 .header-title{
    color:black;
    font-size: 42px;
    position: absolute;
    top: 50px;
    left: 50px;
 }

 .icon-plus-circle{
     font-size:50px;
     left: 50%;

 }




</style>
