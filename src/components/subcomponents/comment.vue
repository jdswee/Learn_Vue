<template>
  <div>
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要输入的内容" maxlength="120"></textarea>
    <mt-button type="primary" size="large">提交评论 </mt-button>
    <div class="cmt-list">
      <div class="item" v-for="(item, index) in commentList" :key="index">
        <div class="title">
          第{{ index + 1 }}楼 用户：{{ item.user_name }} 发表时间：{{ item.add_time | dateFormat}}
        </div>
        <div class="content">{{ item.content === 'undefined' ? '此用户很懒，什么都没说' : item.content }}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="btnGetMore">加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      pageIndex: 1, // 评论数据页码
      commentList: []
    }
  },
  props: ['id'],
  created() {
    this.getComments()
    this.pageIndex = 1
  },
  methods: {
    getComments() {
      this.$http.get('api/getcomments/' + this.id + '?pageindex=' + this.pageIndex).then(response => {
        if (response.body.status === 0) {
          this.commentList = this.commentList.concat(response.body.message) 
        } else {
          Toast('获取评论失败')
        }
      })
    },
    // 点击按钮，加载更多
    btnGetMore() {
      this.pageIndex++
      this.getComments()
    }
  }
}
</script>
<style lang="scss" scoped>
h3 {
  font-size: 16px;
}
textarea {
  height: 85px;
  margin-bottom: 0px;
  font-size: 14px;
}
.cmt-list {
  margin-top: 5px;
  .item {
    .title {
      padding: 5px 0;
      font-size: 12px;
      background-color: #caccca;
    }
    .content {
      padding: 10px;
      font-size: 14px;
    }
  }
} 
</style>
