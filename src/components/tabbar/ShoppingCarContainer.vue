<template>
<!-- 购物车 -->
  <div class="shoppingcar-container">
    <div class="good-list">
      <div class="mui-card" v-for="(item, index) in goodList" :key="index">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img :src="item.thumb_path">
            <div class="info">
              <h1 class="title">{{ item.title }}</h1>
              <div class="detail">
                <span class="price">￥{{ item.sell_price }}</span>
                <numbox 
                  :initcount="$store.getters.getGoodCount[item.id]"
                  :goodid="item.id"></numbox>
                <a href="#" @click.prevent="remove(item.id, index)">删除</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from '../subcomponents/shoppingcart_numbox.vue'

export default {
  data() {
    return {
      goodList: []
    }
  },
  created() {
    this.getGoodList()
  },
  methods: {
    getGoodList() {
      let idList = []
      this.$store.state.cart.forEach(item => idList.push(item.id))
      if(idList.length === 0) return
      this.$http.get('api/goods/getshopcarlist/' + idList.join(',')).then(response => {
        if(response.body.status === 0) {
          this.goodList = response.body.message
        }
      })
    },
    remove(id, index) {
      this.goodList.splice(index, 1)
      this.$store.commit('removeGood', id)
    }
  },
  components: {
    'numbox': numbox
  }
}
</script>

<style lang="scss" scoped>
.shoppingcar-container {
  overflow: hidden;
  background-color: #eee;
  .good-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
      padding: 10px;
      img {
        width: 60px;
        height: 60px;
        margin: 0 5px;
      }
      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
          font-size: 13px;
        }
        .detail {
          .price {
            color: red;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
