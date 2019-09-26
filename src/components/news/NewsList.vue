<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="item.avatar_url">
          <div class="mui-media-body">
            <h1>{{ item.login }}</h1>
            <p class='mui-ellipsis'>
              <span>发表时间：{{ item.score }}</span>
              <span>点击：{{ item.id }}次</span>
            </p>
          </div>
        </a>
      </li>

			</ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      newsList: []
    }
  },
  created() {
    this.getNewsList()
  },
  methods: {
    getNewsList() {
      this.$http.get('search/users?q=aa').then(response => {
        if(response.status === 200) {
          this.newsList = response.body.items
        } else {
          Toast('获取新闻列表失败')
        }
      }, response => {
        Toast(response.statusText)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #226aff;
    }
  }
}
</style>
