<!-- 
  @Author: gxc
  @CreateDate: 2023-08-08
  @FilePath: src\layout\header\header.vue
  @Describe: 
-->
<template>
  <div class="com-header">
    header111
  </div>
</template>

<script lang="ts" setup>

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
      background-color: blue;
      color: #fff;
    }
</style>