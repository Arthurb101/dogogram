<template>
    <div class ="login">
        <div class="card-box card-container">
            <!-- <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> -->
            <a class = "fancy-font"> DogoGram! </a>
            <form class="form-signin">
                <span id="reauth-email" class="reauth-email"></span>
                <input type="email" v-model="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                <input type="string" v-model="inputUserName" class="form-control" placeholder="User Name" required>
                <input type="password" v-model="inputPassword" class="form-control" placeholder="Password" required>
                <input type="password" id="inputREPassword" class="form-control" placeholder="RE-Password" required>

                <button v-on:click="signUpUser" class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Create Account</button>
            </form><!-- /form -->

            <a href="#" v-on:click="changeView" class="forgot-password">
                I already have an account!
            </a>
        </div><!-- /card-container -->
    </div>
</template>

<script>

import axios from 'axios';

 export default {
   name: 'LoginBox',
   data(){
       return{
            inputEmail: "",
            inputUserName:"",
            inputPassword:""
       }
   },
   methods: {
              changeView(view) {
                  this.$emit("currentViews", "LoginBox")
              },
              async signUpUser() {
                  alert("signup was activated!");
                  const user = {
                      email: this.inputEmail,
                      name:this.inputUserName,
                      password:this.inputPassword
                  }
                  try {
                    const response = await axios.post('/api/signup',user);
                    console.log(response);
                  } catch (error) {
                    console.error(error);
                  }
            ``}

          }
 }
</script>

<style scoped>


</style>
