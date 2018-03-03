<template>
  <div>
    <mu-appbar title="js草稿本">
    </mu-appbar>
    <mu-text-field v-model="text" hintText="" multiLine :rows="3" :rowsMax="20"/><br/>
    <mu-raised-button  @click="getResult()" label="Primary" class="demo-raised-button" primary/>
    <div>{{result}}</div>
  </div>
</template>
<script>
export default {
  name: 'Scratch',
  data: () => ({
    text: '',
    result: ''
  }),
  computed: {
  },
  watch: {
  },
  methods: {
    getResult: function () {
      var w = window
      this.result = w.eval(this.text)
      alert(this.result)
    }
  }
}
</script>
<style lang="less" scope>

</style>
