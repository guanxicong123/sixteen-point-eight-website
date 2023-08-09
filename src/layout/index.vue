<!-- 
  @Author: gxc
  @CreateDate: 2023-07-09
  @FilePath: src\layout\index.vue
  @Describe: 
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-header><Header></Header></el-header>
      <el-container>
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <el-main>
          <div class="real-main"><slot></slot></div>
          
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import Header from './header/header.vue'
import Aside from './Aside/aside.vue'
const form = reactive({
  data: []
})

// mounted 实例挂载完成后被调用
onMounted(() => {})
</script>

<style lang="less" scoped>
.el-header{
  padding: 0;
}
.el-main{
  background-color: #eee;
  height: 90vh;
  .real-main{
    background-color: #fff;
    height: 100%;
  }
}
</style>
