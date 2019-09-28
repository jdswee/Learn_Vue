<template>
  <div>
    <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item', item.id == 0 ? 'mui-active': '']" v-for="item in categorys" :key="item.id">
							{{ item.title }}
						</a>
					</div>
				</div>
			</div> 
  </div>
</template>
<script>
import mui from '../../../lib/mui-master/examples/hello-mui/js/mui.min.js'

export default {
  data() {
    return {
      categorys: []
    }
  },
  created() {
    this.getCategory()
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
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  touch-action: pan-y;
}
</style>
