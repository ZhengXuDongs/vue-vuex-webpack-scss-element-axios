<template>
  <div>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{item}}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-button @click="handleJump">跳转到菜单</el-button>
  </div>
</template>

<script>export default {
  name: 'Home',
  data () {
    return {

    }
  },
  methods: {
    handleJump: function () {
      this.$router.push({
        path: '/menu'
      })
    }
  }
}
</script>

<style scoped>

</style>
