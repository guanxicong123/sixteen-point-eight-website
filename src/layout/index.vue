<!-- 
  @Author: gxc
  @CreateDate: 2023-07-09
  @FilePath: src\layout\index.vue
  @Describe: 
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <slot></slot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
const form = reactive({
  data: []
})

// mounted 实例挂载完成后被调用
onMounted(() => {})
</script>

<style lang="scss" scoped></style>
