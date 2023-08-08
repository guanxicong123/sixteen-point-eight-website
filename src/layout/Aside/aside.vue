<!-- 
  @Author: gxc
  @CreateDate: 2023-08-08
  @FilePath: src\layout\Aside\aside.vue
  @Describe: 侧边栏
-->
<template>
  <div class="com-aside">
    <el-scrollbar :height="400">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu :index="nav.title" v-for="nav in navArray" :key="nav.title">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ nav.title }}</span>
          </template>
          <el-menu-item :index="child.title" v-for="child in nav.children" :key="child.title">
            <el-icon><icon-menu /></el-icon>
            <template #title>{{ child.title }}</template>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
const navArray = ref([
  {
    title: '用户管理',

    children: [
      {
        title: '账号管理'
      },
      {
        title: '权限管理'
      }
    ]
  }
])

// mounted 实例挂载完成后被调用
onMounted(() => {})
</script>

<style lang="scss" scoped></style>
