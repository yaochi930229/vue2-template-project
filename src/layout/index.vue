<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, zIndex: 1 }" v-model="collapsed" :trigger="null" collapsible class="left-sider-box">
      <div class="yc-logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header-box" :style="{ position: 'fixed', width: '100%', background: '#fff', padding: collapsed ? '0 95px' : '0 215px' }">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content :class="collapsed ? 'layoutContentClose': 'layoutContentOpen'" :style="{ background: '#fff', padding: '15px', margin: '80px 15px 15px 0' }">
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data () {
    return {
      collapsed: false
    }
  }
}
</script>
<style lang="less">
.yc-logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.layoutContentClose {
  margin-left: 95px !important;
}
.layoutContentOpen {
  margin-left: 215px !important;
}
.header-box {
  box-shadow: 0 1px 0 0 rgba(0,0,0,0.1);
}
</style>
