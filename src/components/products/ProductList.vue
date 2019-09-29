<template>
  <div class="good-list">
    <div class="item">
      <img src="http://demo.dtcms.net/upload/201504/18/thumb_201504181230434303.jpg" alt="img">
      <h1 class="title">华为（HUAWEI）荣耀6Plus16G双4G版</h1>
      <div class="info">
        <div class="price">
          <span class="new">￥2195</span>
          <span class="old">￥2499</span>
        </div>
        <div class="detail">
          <span class="hotsale">热卖中</span>
          <span class="remainder">剩60件</span>
        </div>
      </div>
    </div>
    <div class="item">
      <img src="http://demo.dtcms.net/upload/201504/18/thumb_201504181230434303.jpg" alt="img">
      <h1 class="title">华为（HUAWEI）荣耀6Plus16G双4G版</h1>
      <div class="info">
        <div class="price">
          <span class="new">￥2195</span>
          <span class="old">￥2499</span>
        </div>
        <div class="detail">
          <span class="hotsale">热卖中</span>
          <span class="remainder">剩60件</span>
        </div>
      </div>
    </div>
    <div class="item">
      <img src="http://demo.dtcms.net/upload/201504/18/thumb_201504181230434303.jpg" alt="img">
      <h1 class="title">华为（HUAWEI）荣耀6Plus16G双4G版</h1>
      <div class="info">
        <div class="price">
          <span class="new">￥2195</span>
          <span class="old">￥2499</span>
        </div>
        <div class="detail">
          <span class="hotsale">热卖中</span>
          <span class="remainder">剩60件</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
