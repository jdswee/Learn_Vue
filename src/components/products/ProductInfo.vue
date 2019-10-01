<template>
  <div class="productinfo-container">
    <!-- 商品详情页 -->
    <!-- 轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotuList="imagesList"></swiper>
        </div>
      </div>
    </div>
    <!-- 商品购买 -->
  </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue'
export default {
  data() {
    return {
      imagesList: [], // 轮播图
    }
  },
  props: ['id'],
  created() {
    this.getImages()
  },
  methods: {
    getImages() {
      this.$http.get('api/getthumimages/' + this.id).then(response => {
        if(response.body.status === 0) {
          this.imagesList = response.body.message
        }
      })
    }
  },
  components: {
    'swiper': swiper
  }
}
</script>

<style lang="scss" scoped>
.productinfo-container {
  overflow: hidden;
  background-color: #eee;
}
</style>
