<template>
  <div class="mui-numbox" data-numbox-min='1'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input 
      id="test" 
      class="mui-input-numbox" 
      type="number" 
      :value="initcount" 
      @change="countChanged"
      ref="numbox" 
      readonly />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from '../../../lib/mui-master/examples/hello-mui/js/mui.js'

export default {
  props: ['initcount', 'goodid'],
  mounted() {
    mui('.mui-numbox').numbox()
  },
  methods: {
    countChanged() {
      this.$store.commit('updateGoodinfo', {id: this.goodid, count: this.$refs.numbox.value})
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
