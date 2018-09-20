<template>
  <div>我是个人中心页面
    <el-menu class="el-menu-vertical-demo">
      <PublicMenu :menuData="menuData"></PublicMenu>
    </el-menu>
  </div>
</template>

<script>
  import PublicMenu from '@/components/PublicMenu'
  import jsonData from '@/assets/datas/jsondata'
  export default {
    name: 'PersonCenter',
    data () {
      return {
        menuData: jsonData.cMenus
      }
    },
    components: {
      PublicMenu
    }
  }
</script>

<style scoped>

</style>
