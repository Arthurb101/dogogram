<template>
  <div class="loginPage">
    <h1 class="header-title fancy-font">This is the feed page</h1>
    <h2>{{state1}}</h2>
    <h2>{{state2}}</h2>
    <div class="container">

    </div><!-- /container -->

</div>

</template>


<script>

 export default {
   name: 'TheFeedPage',
   components: {  },
   data(){
       return {
           state2: "haha"
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
 .posts div {
     margin-bottom: 40px;
 }
 h1 {
     color: #8BB8C7;
     font-size: 2.5em;
 }
 h2 {
     margin: 0px;
 }
 h3 {
     margin: 0px;
     font-weight: normal;
     font-style: italic;
 }
 .header-title{
    color:black;
    font-size: 42px;
    position: absolute;
    top: 50px;
    left: 50px;
 }




</style>
