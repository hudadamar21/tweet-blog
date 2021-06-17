<template>
  <MainLayout>
    <router-view/>
  </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/Main.vue";
import Home from '@/views/Home.vue'

export default {
  components: { MainLayout, Home },
  
}
</script>