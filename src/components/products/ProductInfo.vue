<template>
<!-- 商品详情页 -->
  <div class="productinfo-container">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <div class="ball" v-show="ballflag" ref="ball"></div>
    </transition>
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
      <div class="mui-card-header">{{ productInfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥{{productInfo.market_price}}</del>  销售价：<span class="now">￥{{productInfo.sell_price}}</span>
          </p>
          购买数量：<number-box @getCount="getSelectedCount" :maxcount="productInfo.stock_quantity"></number-box>
          <div class="btn">
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="togglebal">加入购物车</mt-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品参数 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ productInfo.goods_no }}</p>
          <p>库存情况：{{ productInfo.stock_quantity }}件</p>
          <p>上架时间：{{ productInfo.add_time | dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
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
      productInfo: {},
      ballflag: false,
      itemcount: 1
    }
  },
  props: ['id'],
  created() {
    this.getImages()
    this.getProductInfo()
  },
  methods: {
    // 获取头部轮播图
    getImages() {
      this.$http.get('api/getthumimages/' + this.id).then(response => {
        if(response.body.status === 0) {
          response.body.message.forEach(element => {
            element.img = element.src
          });
          this.imagesList = response.body.message
        }
      })
    },
    // 获取商品信息
    getProductInfo(){
      this.$http.get('api/goods/getinfo/' + this.id).then(response => {
        if(response.body.status === 0) {
          this.productInfo = response.body.message[0]
        } 
      })
    },
    // 跳转到图文介绍界面
    goDesc(id) {
      this.$router.push({ name: 'productdetail', params: { id: id }})
    },
    // 跳转到评论页
    goComment(id) {
      this.$router.push({ name: 'productcomment', params: { id: id }})
    },
    togglebal() {
      this.ballflag = !this.ballflag
    },
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)"
    },
    enter(el, done) {
      el.offsetWidth;

      const ballPosition = this.$refs.ball.getBoundingClientRect()
      const badgePosition = document.getElementById('badge').getBoundingClientRect()
      const xdistance = badgePosition.left - ballPosition.left
      const ydistance = badgePosition.top - ballPosition.top

      el.style.transform = `translate(${xdistance}px, ${ydistance}px)`
      el.style.transition = "all .5s cubic-bezier(.45,-0.13,1,.75)";
      done();
    },
    afterEnter(el) {
      this.ballflag = !this.ballflag
    },
    getSelectedCount(count) {
      this.itemcount = count
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
  .mui-card-footer {
    display: block;
    .mint-button {
      margin: 5px 0;
    }
  }
  .ball {
    position: absolute;
    top: 390px;
    left: 150px;
    z-index: 99;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
  }
}
</style>
