<template>
  <div>
    <!-- 顶部滑动条 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item', item.id == 0 ? 'mui-active': '']" v-for="item in categorys" :key="item.id" @click="getPhotos(item.id)">
            {{ item.title }}
          </a>
        </div>
      </div>
    </div> 
    <!-- 图片区域 -->
    <ul class="photo-list">
      <li v-for="(item, index) in imgList" :key="index">
        <img v-lazy="item.img_url" class="photo-item-img">
        <div class="info">
          <h1 class="title">{{ item.title }}</h1>
          <p class="content">{{ item.zhaiyao }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import mui from '../../../lib/mui-master/examples/hello-mui/js/mui.min.js'
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      categorys: [],
      imgList: []
    }
  },
  created() {
    this.getCategory()
    this.getPhotos(0)
  },
  mounted() {
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005
    })
  },
  methods: {
    getCategory() {
      this.$http.get('api/getimgcategory').then(response => {
        if(response.body.status === 0) {
          response.body.message.unshift({title: '全部', id: 0})
          this.categorys = response.body.message
        }
      })
    },
    getPhotos(categoryid) {
      this.$http.get('api/getimages/' + categoryid).then(response => {
        if (response.body.status === 0) {
          this.imgList = response.body.message
          if (response.body.message.length === 0) {
            return Toast('无数据')
          }
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  touch-action: pan-y;
}
.photo-list {
  padding: 10px 10px 0 10px;
  li {
    position: relative;
    box-shadow: 0 0 10px #999;
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    overflow: hidden;
    .photo-item-img {
      width: 100%;
      vertical-align: middle;
    }
    .info {
      position: absolute;
      bottom: 0;
      max-height: 83px;
      padding: 0 5px;
      background-color: rgba($color: #000000, $alpha: 0.5);
      text-align: left;
      color: #fff;
      .title {
        font-size: 14px;
      }
      .content {
        font-size: 12px;
        color: #fff;
      }
    }
    img[lazy=loading] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
  }
}
</style>
