<template>
  <div>
    <!-- 轮播图 -->
    <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/Home/newslist">
          <img src="../../img/menu1.png">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/Home/photolist"> 
          <img src="../../img/menu2.png">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">       
        <router-link to="/Home/productlist">
          <img src="../../img/menu3.png">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <!-- TODO -->        
        <a href="#">
          <img src="../../img/menu4.png">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <!-- TODO -->        
        <a href="#">
          <img src="../../img/menu5.png">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <!-- TODO -->        
        <a href="#">
        <img src="../../img/menu6.png">
        <div class="mui-media-body">联系我们</div></a></li>
    </ul> 

  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import swiper from '../subcomponents/swiper.vue'

export default {
  data() {
    return {
      lunbotuList: [],
    }
  },
  created() {
    this.getSwipeData()
  },
  methods: {
    // 获取轮播图数据
    getSwipeData() {
      this.$http.get('api/getlunbo').then(result => {
        if (result.status === 200) {
          this.lunbotuList = result.body.message
        } else {
          Toast('获取轮播图失败')
        }
      }, response => {
        Toast({
          message: '获取数据失败',
          duration: 3000
        })
      })
    }
  },
  components: {
    'swiper': swiper
  }
}
</script>

<style lang="scss" scoped>
.mui-table-view.mui-grid-view.mui-grid-9 {
  border: none;
  background-color: #fff;
  img {
    width: 60px;
    height: 60px;
  }
  .mui-table-view-cell {
    border: none;
    .mui-media-body {
      font-size: 13px; 
    }
  }
}
</style>
