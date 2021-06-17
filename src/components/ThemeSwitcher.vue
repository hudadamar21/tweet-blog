<template>
  <div class="flex items-center gap-3">
    <span class="hidden lg:block">Light</span>
    <div @click="onSwitch" class="py-3 cursor-pointer">
      <div  class="relative h-1 w-14 rounded-full bg-blue-500">
        <div 
          class="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full transition-all duration-500"
          :class="isDark ? 'left-[60%] bg-white' : 'left-1 bg-tweetgray-400'"
        ></div>
      </div>
    </div>
    <span class="hidden lg:block">Dark</span>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup(){
    const isDark = ref(false)

    const onSwitch = () => {
      isDark.value = !isDark.value
      
      const html = document.querySelector('html')
      if(isDark.value) html.classList.add('dark')
      else html.classList.remove('dark')
    }
    return {
      isDark,
      onSwitch
    }
  }
}
</script>

<style>

</style>