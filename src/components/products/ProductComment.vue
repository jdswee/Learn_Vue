<template>
  <div class="productcomment-container">
    <comment-box :id="id"></comment-box>
  </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'

export default {
  props: ['id'],
  components: {
    'comment-box': comment
  }
}
</script>

<style lang="scss" scoped>
.productcomment-container {
  padding: 10px;
}
</style>
