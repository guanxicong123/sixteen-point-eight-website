<!-- 
  @Author: gxc
  @CreateDate: 2023-08-09
  @FilePath: src\layout\header\components\user.vue
  @Describe: 
-->
<template>
  <div class="com-user">
    <div class="user-name">gxc</div>
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
    .com-user{
        height: 60px;
        width: 100px;
        .user-name{
            height: 100%;
            text-align: center;
            color: yellow;
        }
    }
</style>