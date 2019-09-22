<template>
  <div>
    <h1>这是 App 组件。</h1>
    <mt-button type="default" size="small">default</mt-button>
    <mt-button type="primary" size="large">primary</mt-button>
    <mt-button type="danger" size="normal" disabled>danger</mt-button>
    <mt-button plain>plain</mt-button>
    <mt-button icon="back">back</mt-button>
    <mt-button icon="more">more</mt-button>
    <button type="button" class="mui-btn mui-btn-royal">紫色</button>
    <button type="button" class="mui-btn">默认</button>
    <router-link to="/account">Account</router-link>
    <router-link to="/goodsList">GoodsList</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {}  
  }
}
</script>
<style lang="less" scope>
.color-red i {
  color: greenyellow;
}
</style>
