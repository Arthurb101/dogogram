import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: {
      state : {
          id: -1,
          name: null
      },
      getters: {
        user: state => this.state.user,
      },
      mutations: {
        setUser (state, user) {
          console.log("setting user");
          console.log("before ", this.state.user);
          this.state.user = user;
          console.log(this.state.user);


        },
      },
      actions: {
        async loginUser(context,userLoginInfo) {

          // try{
            const user = await axios.post("/api/login",userLoginInfo);
             console.log("it finished");
            console.log("this is what should be set ", user.data[0] );
            context.commit('setUser',user.data[0]);
          //  } catch (e) {
          //   console.log("failure to login: ", e)
          //
          // }

        },
      }

    }
  },
})


// export default new Vuex.Store({
//
//   state: {
//     entries: [],
//   },
//   getters: {
//     entries: state => state.entries,
//   },
//   mutations: {
//     setEntries (state, entries) {
//       state.entries = entries;
//     },
//   },
//   actions: {
//     getEntries(context,user) {
//       return axios.get("/api/entries").then(response => {
// 	return context.commit('setEntries',response.data.entries);
//       }).catch(err => {
// 	console.log("getEntries failed:",err);
//       });
//     },
//   }
// });
