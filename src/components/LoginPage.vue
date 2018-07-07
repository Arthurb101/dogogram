
<template>
  <div class="loginPage">
    <h1 class="header-title fancy-font">Welcome To DogoGram!</h1>
    <div class="container">
        <component @currentViews="setCurrentView" :is="currentView"></component>
    </div><!-- /container -->

</div>

</template>


<script>
import LoginBox from '@/components/LoginBox.vue'
import SignUp from '@/components/SignUp.vue'

 export default {
   name: 'LoginPage',
   components: { LoginBox, SignUp },
   data(){
       return {
       currentView : 'LoginBox'
    }
},
   methods: {
            setCurrentView(view) {
                this.currentView = view
            }

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
