<template>
    <div>
      <el-col :span="12">
        <headers :title="logo"/>
        <h5>默认颜色</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
            <el-submenu v-for="item in menus" :key="item.key" :index="item.key">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.title}}</span>
              </template>
              <div v-for="items in item.children" :key="items.key">
                <el-submenu :index="items.key" v-if="items.children">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{items.title}}</span>
                  </template>
                  <div v-for="itemss in items.children" :key="itemss.key">
                    <el-submenu :index="itemss.key" v-if="itemss.children">
                      <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{itemss.title}}</span>
                      </template>
                    </el-submenu>
                    <el-menu-item v-else :index="itemss.key"><span>{{itemss.title}}</span></el-menu-item>
                  </div>
                </el-submenu>
                <el-menu-item v-else :index="items.key"><span>{{items.title}}</span></el-menu-item>
              </div>
            </el-submenu>
        </el-menu>
      </el-col>

    </div>
</template>

<script>
import jsonData from '@/assets/datas/jsondata'
import headers from '@/components/header'
export default {
  name: 'Menu',
  data () {
    return {
      menus: jsonData.cMenus,
      logo: '测试'
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: {
    headers: headers
  }
}
</script>

<style scoped>

</style>
