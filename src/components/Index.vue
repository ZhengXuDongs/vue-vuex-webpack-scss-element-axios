<template>
    <div>
      <vue-drawer-layout
        ref="drawer"
        :drawer-width="Math.floor(800/3)"
        :enable="true"
        :animatable="true"
        :z-index="0"
        :drawable-distance="Math.floor(800/3)"
        :content-drawable="true"
        :backdrop="true"
        :backdrop-opacity-range="[0,0.4]"
        @mask-click="handleMaskClick">
        <div class="drawer-content" slot="drawer">
          <h2>倒计时尖峰时刻</h2>
        </div>
        <div slot="content">
          <router-view/>
          <div class="tab_bottom">
            <div class="tab_content" :class="tabId===item.id?tabColor:tabColors" @click="selectTab(item.id,item.urls)" v-for="(item) in menus" :key="item.id">
              <i class="iconfont icon_img" :class="item.icons"></i>
              <p>{{item.title}}</p>
            </div>
          </div>
        </div>
      </vue-drawer-layout>
    </div>
</template>

<script>
import jsonData from '@/assets/datas/jsondata'
export default {
  name: 'Index',
  data () {
    return {
      menus: jsonData.meuns,
      tabId: 1,
      tabColor: 'tab_color',
      tabColors: ''
    }
  },
  methods: {
    selectTab (tabId, url) {
      this.tabId = tabId
      this.$router.push({
        path: url
      })
    },
    handleMaskClick () {
      this.$refs.drawer.toggle()
    }
  }
}
</script>

<style lang="scss" scoped>
.tab_bottom{
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  height: 40px;
  width: 100%;
  text-align: center;
  background: white;
  padding-top: 5px;
  font-size: 12px;
}
.tab_content{
  height: 40px;
}
.icon_img{
  font-size: 18px;
}
.tab_color{
  color: #E96926;
}
</style>
