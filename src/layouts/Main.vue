<template>
  <div class="relative flex flex-col lg:flex-row w-full">
    <Sidebar/>
    <main class="w-full lg:w-[50%] lg:border-l-2 lg:border-r-2 dark:border-tweetgray-100">
      <nav class="flex items-center justify-between border-b-1 dark:border-tweetgray-100 transition p-5 w-full border-b-2">
        <div 
          @click="setShowMenu(true)" 
          class="
          text-tweetgray-300 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-tweetgray-300
            block lg:hidden p-1 rounded-md cursor-pointer"
        >
          <SVGIcon icon="hamburger-menu" size="w-6 h-6" />
        </div>
        <h1 class="font-semibold text-blue-400 text-xl">TweetBlog</h1>
        <ThemeSwitcher/>
      </nav>
      <slot/>
    </main>
    <Aside/>
  </div>
</template>

<script>
import Sidebar from '@/views/Sidebar.vue'
import Aside from '@/views/Aside.vue'
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import SVGIcon from "@/components/SVGIcon.vue";
import { setShowMenu } from '@/utils/setShowMenu.js'

export default {
  components: { Sidebar, Aside, ThemeSwitcher, SVGIcon },
  setup(){
    return {
      setShowMenu
    }
  }
}
</script>