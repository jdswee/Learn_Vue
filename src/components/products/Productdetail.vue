<template>
<!-- 商品图文介绍页 -->
  <div class="productdetail-container">
    <h3 class="title">{{ info.title }}</h3>
    <hr>
    <div class="content" v-html="info.content"></div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      info: {}
    }
  },
  created() {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo() {
      this.$http.get('api/goods/getdesc/' + this.id).then(response => {
        if(response.body.status === 0) {
          this.info = response.body.message[0]
        }
      })
    }
  }
}
</script>

<style lang="scss">
.productdetail-container {
  padding: 4px;
  .title {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .content {
    table {
      width: 100%;
    }
    p {
      margin: 0;
      padding: 0;
    }
    img {
      width: 100%;
    }
  }
}
</style>
