<template>
  <header>
    <div class="wrapper">
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav> -->
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import '@/styles/index.scss'
import { RouterLink, RouterView } from 'vue-router'
</script>

<style lang='scss' scoped>

</style>
