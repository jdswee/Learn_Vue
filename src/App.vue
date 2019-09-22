<template>
  <div>
    <h1>这是 App 组件。</h1>
    <mt-button type="default" size="small">default</mt-button>
    <mt-button type="primary" size="large">primary</mt-button>
    <mt-button type="danger" size="normal" disabled>danger</mt-button>
    <mt-button plain>plain</mt-button>
    <mt-button icon="back">back</mt-button>
    <mt-button icon="more">more</mt-button>
    <router-link to="/account">Account</router-link>
    <router-link to="/goodsList">GoodsList</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      toastInstance: null
    }  
  },
  methods: {
    getList() {
      this.show()
      setTimeout(() => {
        this.toastInstance.close()
      }, 3000)
    },
    show() {
      this.toastInstance = Toast({
        message: 'tips',
        className: 'color-red',
        iconClass: 'icon glyphicon glyphicon-ok',
        duration: -1
      })
    }
  },
  created() {
    this.getList()
  },
}
</script>
<style lang="less" scope>
.color-red i {
  color: greenyellow;
}
</style>
