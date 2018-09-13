<template>

    <b-modal id="modal2"
    :visible="show"
    :centered="true"
    title="Bootstrap-Vue"
    :hide-header = "true"
    :hide-footer = "true"
    @hide="close"

    >

        <h1>DogoGram</h1>
      <b-container :fluid="true">
        <center>

          <b-form >
            <b-form-input  v-model="inputPostTitle" placeholder="Title" class = "signUp-input"  />
            <b-form-input  v-model="inputPostDescription" placeholder="Descripttion" class = "signUp-input" />
            <b-form-input  v-model="inputPostImageLink" placeholder="image-Link" class = "signUp-input" />
            <b-button  size="lg" variant="primary" style="width:100%; margin-bottom:10px"> Add Post </b-button>
          </b-form>
        </center>
      </b-container>
    </b-modal>

</template>


<script>
import { Portal, PortalTarget } from 'portal-vue';
import axios from 'axios';


export default{
  components: {
  Portal,
  PortalTarget
 },
 props:{
    show: {
        type: Boolean,
        default: false
      }
  },
   data(){
       return{
         inputPostTitle: "",
         inputPostDescription: "",
         inputPostImageLink:""

       }
   },
 methods: {
   close: function (evt) {
   this.$emit("closeModal");

 },
 async setPost() {

            const post = {
                title: this.inputPostTitle,
                content:this.inputPostImageLink,
                description:this.inputPostDescription
            }
            try {
              const response = await axios.post('/api/post',post);
              console.log(response);
            } catch (error) {
              console.error(error);
            }
      ``}

        }
}
</script>
