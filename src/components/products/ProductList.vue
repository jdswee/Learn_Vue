<template>
  <div class="good-list">
    <div class="item" v-for="item in goodslist" :key="item.id">
      <img :src="item.img_url" alt="img">
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <div class="price">
          <span class="new">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </div>
        <div class="detail">
          <span class="hotsale">热卖中</span>
          <span class="remainder">剩{{ item.stock_quantity }}件</span>
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
</div>
</template>
<script>
import { Toast } from 'mint-ui'

export default {
  data() {
    return {
      pageIndex: 1,
      goodslist: []
    }
  },
  created() {
    this.pageIndex = 1
    this.getGoodsList()
  },
  methods: {
    getGoodsList() {
      this.$http.get('api/getgoods?pageindex=' + this.pageIndex).then(response => {
        if(response.body.status === 0) {
          // this.goodslist = response.body.message
          if(response.body.message.length === 0) return Toast('到底了')
          this.goodslist = this.goodslist.concat(response.body.message)
        } else {
          Toast('无数据')
        }
      }, response => {
        Toast(response.statusText)
      })
    },
    getMore() {
      this.pageIndex++
      this.getGoodsList()
    }
  }
}
</script>
<style lang="scss" scoped>
.good-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
  .item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 49%;
    min-height: 293px;
    margin: 4px 0;
    padding: 2px;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
      color: #000;
    }
    .info {
      padding: 5px;
      background: #eee;
      .price {
        .new {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          margin-left: 10px;
          color: #666;
          text-decoration: line-through;
          font-size: 12px;
        }
      }
      .detail {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #666;
      }
    }
  }
}
</style>
