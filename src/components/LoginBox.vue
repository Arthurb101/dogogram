<template>
    <div class ="loginBox
                 card-box card-container">

            <!-- <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> -->
            <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" class="profile-name-card"></p>
            <form class="form-signin">
                <span id="reauth-email" class="reauth-email"></span>
                <input v-model="inputUserName"  id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                <input v-model="inputPassword" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                <div id="remember" class="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me"> Remember me
                    </label>
                </div>
                <button v-on:click="loginUser" class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
            </form><!-- /form -->
            <a href="#" class="forgot-password">
                Forgot the password?
            </a>
            <a href="#" v-on:click="changeView" class="forgot-password">
                Dont have an account?
            </a>
        </div><!-- /card-container -->

</template>

<script>
 export default {
   name: 'loginBox',
   data(){
       return{
           inputUserName:"",
           inputPassword:""
       }
   },
 methods: {
            changeView(view) {
                this.$emit("currentViews", "SignUp")
            },
        async loginUser(){

                const userInfo = {
                    name:this.inputUserName,
                    password:this.inputPassword
                }
                console.log(userInfo);
                this.$store.dispatch("loginUser",userInfo)
                console.log("this is the state after",this.$store.state.user.id)
                }


        }
}
</script>
