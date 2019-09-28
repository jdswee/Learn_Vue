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
    <ul>
      <li v-for="(item, index) in imgList" :key="index">
        <img v-lazy="item.img_url">
      </li>
    </ul>
  </div>
</template>
<script>
import mui from '../../../lib/mui-master/examples/hello-mui/js/mui.min.js'

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
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
