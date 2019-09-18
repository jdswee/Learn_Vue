<template>
  <div>
    <h1>这是 login 组件，是通过 .vue 文件定义出来的 --- {{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '123'
    }
  },
  methods: {
    show() {
      console.log('调用了 login.vue 中的 show 方法')
    }
  }
}
</script>
<style>
  
</style>