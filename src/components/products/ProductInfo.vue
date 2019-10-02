<template>
  <div class="productinfo-container">
    <!-- 商品详情页 -->
    <!-- 轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotuList="imagesList" :isfull="false"></swiper>
        </div>
      </div>
    </div>
    <!-- 商品购买 -->
    <div class="mui-card">
      <div class="mui-card-header">商品名称</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥2699</del>  销售价：<span class="now">￥2199</span>
          </p>
          购买数量：<number-box></number-box>
          <div class="btn">
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
        </div>
      </div>
      <div class="mui-card-footer">页脚</div>
    </div>
  </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue'
import numberBox from '../subcomponents/goodinfo_numberbox.vue'

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
          response.body.message.forEach(element => {
            element.img = element.src
          });
          this.imagesList = response.body.message
          
        }
      })
    }
  },
  components: {
    'swiper': swiper,
    'number-box': numberBox
  }
}
</script>

<style lang="scss" scoped>
.productinfo-container {
  overflow: hidden;
  background-color: #eee;
  .price {
    .now {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
  .btn {
    margin-top: 10px;
  }
}
</style>
