<template>
  <div class="posts">
    <h1>Blog-o-Rama</h1>
    <div v-for="post in posts">
      <h2>{{post.title}}</h2>
      <h3>{{post.author}}, {{post.created | dateFormat}}</h3>
      <img v-bind:src="post.photo">
      <p>{{post.text}}</p>
    </div>
  </div>
</template>

<script>
 import moment from 'moment';
 export default {
   name: 'BlogPosts',
   computed: {
     posts: function() {
       return this.$store.getters.entries;
     }
   },
   created: function() {
     this.$store.dispatch('getEntries');
   },
   filters: {
     dateFormat: function(date) {
       return moment(date).format('MMMM Do YYYY, h:mm a');
     }
   }
 }
</script>

<style scoped>
 /* https://color.adobe.com/%EB%B3%91%EC%9B%90-%EC%98%81%EC%88%98%EC%A6%9D-%ED%85%8C%EB%A7%88-color-theme-10646528/?showPublished=true */
 .posts {
     background: #D9D9D9;
     width: 800px;
     padding: 50px;
     margin-left: 60px;
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
</style>
