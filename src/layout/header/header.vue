<!-- 
  @Author: gxc
  @CreateDate: 2023-08-08
  @FilePath: src\layout\header\header.vue
  @Describe: 
-->
<template>
  <div class="com-header">
    <div class="user-name"><user></user></div>

  </div>
</template>

<script lang="ts" setup>
import user from './components/user.vue'
const form = reactive({
  data: []
})

  // mounted 实例挂载完成后被调用
  onMounted(() => {
    
  })

</script>

<style lang="less" scoped>
    .com-header{
      width: 100%;
      height: 60px;
      background-color: #c6e2ff;
      color: #fff;
      padding:0 20px;
      vertical-align: center;
      .user-name{
        float: right
      }
    }
</style>