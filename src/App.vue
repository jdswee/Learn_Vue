<template>
  <div class="app-container">
    <!-- 顶部 header 区域 -->
    <mt-header fixed title="Vue 项目实例">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>
    <!-- 中间 content 区域 -->
    <transition>
			<router-view></router-view>
		</transition>
    <!-- 底部 tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-items" to="/Home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-items" to="/Member">
        <span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-items" to="/ShoppingCart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{ $store.getters.getTotalNumb }}</span> 
        </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-items" to="/Search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
  export default {
}
</script>

<style lang="scss" scoped>
.mint-header {
	z-index: 99;
}
.app-container {
	padding-top: 40px;
	padding-bottom: 50px;
	overflow-x: hidden;
}
.v-enter {
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to {
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active
.v-leave-active {
	transition: all .5s ease;
}

</style>
