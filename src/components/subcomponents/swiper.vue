<template>
  <div>
    <!-- 轮播图组件 -->
     <mt-swipe :auto="3000" :showIndicators="true">
      <mt-swipe-item v-for="(item, index) in lunbotuList" :key="index">
        <a :href="item.url">
          <img :src="item.img" :class="{'full': isfull}">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: ['lunbotuList', 'isfull']
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    text-align: center;
    img {
      height: 100%;
      &.full {
        width: 100%;
      }
    }
  }
}
</style>
