<template>
  <div>
    <!-- 轮播图组件 -->
     <mt-swipe :auto="3000" :showIndicators="true">
      <mt-swipe-item v-for="(item, index) in lunbotuList" :key="index">
        <a :href="item.url">
          <img :src="item.img">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: ['lunbotuList']
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
