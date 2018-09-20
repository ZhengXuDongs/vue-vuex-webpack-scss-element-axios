<template>
    <div>
      <template v-for="item in menuData">
        <el-submenu :index="item.key" v-if="item.children" :key="item.key">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span slot="title">{{item.title}}</span>
          </template>
          <PublicMenu :menuData="item.children"></PublicMenu>
        </el-submenu>
        <el-menu-item :index="item.key" v-else :key="item.key">
          {{item.title}}
        </el-menu-item>
      </template>
    </div>
</template>

<script>
export default {
  name: 'PublicMenu',
  props: ['menuData']
}
</script>

<style scoped>

</style>
