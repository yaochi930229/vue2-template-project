<template>
  <div id="app">
    <Layout v-if="$route.path !== '/login'">
      <router-view />
    </Layout>
    <slot v-else>
      <router-view />
    </slot>
  </div>
</template>

<script>
import Layout from '@/layout/index'
export default {
  name: 'App',
  components: {Layout}
}
</script>

<style>
::-webkit-scrollbar {
  width: 6px;   /* 滚动条宽度， width：对应竖滚动条的宽度  height：对应横滚动条的高度*/
  height: 6px;
}
/*定义滚动条轨道（凹槽）样式*/
::-webkit-scrollbar-track {
  border-radius: 3px;
}
/*定义滑块 样式*/
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  height: 100px;    /* 滚动条滑块长度 */
  background-color: rgba(0,0,0,0.2);
}
</style>
