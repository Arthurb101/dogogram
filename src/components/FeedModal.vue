<template>
  <div>
    <b-form-textarea id="textarea1"
                     v-model="text"
                     placeholder="hows life?"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
    <pre class="mt-3">{{ text }}</pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>
