<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import layout from '@/layout/index.vue'
</script>

<template>
  <!-- <header> -->
  <div class="app">
    <layout>
      <div>111</div>
    </layout>

    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
  </div>
</template>

<style scoped>
.app {
  max-width: 100vw;
  max-height: 100vh;
}
</style>
