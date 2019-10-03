<template>
  <div class="mui-numbox" data-numbox-min='1'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input 
      id="test" 
      class="mui-input-numbox" 
      type="number" 
      value="1" 
      @change="countChanged"
      ref="numbox" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from '../../../lib/mui-master/examples/hello-mui/js/mui.js'
// C:\VueDemo\lib\mui-master\examples\hello-mui\js\mui.min.js
export default {
  props: ['maxcount'],
  mounted() {
    // mui.init();
    mui('.mui-numbox').numbox()
  },
  methods: {
    countChanged() {
      this.$emit('getCount', parseInt(this.$refs.numbox.value))
    }
  },
  watch: {
    'maxcount': function(newVal, oldVal) {
      mui('.mui-numbox').numbox().setOption('max', newVal)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
