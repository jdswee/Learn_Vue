<template>
  <div class="photoinfo-container">
    <h3 class="title">{{ photoInfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoInfo.add_time | dateFormat }}</span>
      <span>点击次数：{{ photoInfo.click }}次</span>
    </p>
    <hr>
    <!-- 图片 -->
    <div class="thumbs">
      <template>
        <vue-preview :slides="slide1"></vue-preview>
      </template>
    </div>
    <!-- 文字内容 -->
    <div class="content" v-html="photoInfo.content"></div>
    <comment :id="this.id"></comment>
  </div>
</template>
<script>
// 弹窗组件
import { Toast } from 'mint-ui'
// 评论组件
import comment from '../subcomponents/comment.vue'

export default {
  data() {
    return {
      photoInfo: {},
      slide1: []
    }
  },
  created() {
    this.getPhotoInfo()
    this.getThumbImgs()
  },
  methods: {
    getPhotoInfo() {
      this.$http.get('api/getImageInfo/' + this.id).then(response => {
        if(response.body.status === 0) {
          this.photoInfo = response.body.message[0]
        } else {
          Toast(response.statusText)
        }
      })
    },
    getThumbImgs() {
      this.$http.get('api/getthumimages/' + this.id).then(response => {
        if (response.body.status === 0) {
          this.slide1 = response.body.message
          this.slide1.forEach(item => {
            item.w = 600
            item.h = 400
            item.msrc = item.src
          })
        }
      })
    }
  },
  props: ['id'],
  components: {
    'comment': comment
  },
}
</script>
<style lang="scss" scoped>
.photoinfo-container {
  padding: 5px;
  .title {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    margin: 10px 0 5px;
    font-size: 12px;
  }
  .content {
    margin-top: 10px;
    line-height: 30px;
    font-size: 13px; 
    text-indent: 2em;
  }
}
</style>
