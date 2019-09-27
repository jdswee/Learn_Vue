<template>
  <div class="newsinfo-container">
    <h3 class="title">{{ contentList.title }}</h3>
    <p class="sub-title">
      <span>发表时间：{{ contentList.add_time | dateFormat}}</span>
      <span>点击：{{ contentList.click }}次</span>
    </p>
    <hr />
    <div class="content" v-html="contentList.content"></div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data () {
    return {
      contentList: {}
    };
  },
  created() {
    this.getNewsInfo();
  },
  props: ["id"],
  methods: {
    getNewsInfo() {
      this.$http.get("api/getnew/" + this.id).then(
        response => {
          if (response.body.status === 0) {
            this.contentList = response.body.message[0];
          } else {
            Toast("获取新闻详情失败");
          }
        },
        response => {
          Toast(response.statusText);
        }
      );
    }
  }
}
</script>

<style lang="scss" scoped>
.newsinfo-container {
  padding: 0 4px;
  .title {
    margin: 10px 0;
    font-size: 16px;
    text-align: center;
    color: #ff0000;
  }
  .sub-title {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #226aff;
  }
}
</style>
