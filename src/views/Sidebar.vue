<template>
  <div 
    ref="sidebar_overlay"
    @click.self="setShowMenu(false)"
    class="fixed lg:static lg:block inset-0 z-20 lg:w-[20%] bg-[#243447] lg:bg-white transition duration-300 lg:duration-75 bg-opacity-0 hidden"
  > 
    <div ref="sidebar" class="bg-white dark:bg-tweetgray-200 w-[80%] md:w-[50%] xl:w-full h-full py-6 lg:py-16 transition duration-300 lg:duration-75 overflow-auto transform lg:-translate-x-0">

      <div class="flex lg:hidden items-center w-full justify-between px-3 gap-3 mb-5 border-b-2 dark:border-tweetgray-100 pb-5">

        <!-- Search Input -->
        <div class="flex items-center py-3 px-4 rounded-3xl bg-gray-200 dark:bg-tweetgray-300 flex-grow">
          <SVGIcon icon="search" size="w-5 h-5" color="text-gray-400"/>
          <input type="text" class="ml-2 bg-transparent text-sm" placeholder="Search Postingan">
        </div>

        <!-- close Menu -->
        <button 
          class="text-tweetgray-300 dark:text-gray-200"
          @click="setShowMenu(false)"
        >
          <SVGIcon icon="x" size="w-8 h-8"/>
        </button>
      </div>

      <!-- Menu List -->
      <ul class="flex flex-col gap-7 px-8">
        <li v-for="menu of menus" :key="menu.name" class="flex items-center dark:hover:text-blue-400 hover:text-blue-400">
          <SVGIcon :icon="menu.icon" size="w-7 h-7"/>
          <router-link 
            to="/"
            class="font-bold ml-3"
            :class="menu.name == activeMenu ? 'text-blue-400' : ''"
          >{{ menu.name }}</router-link>
        </li>
      </ul>

      <!-- Button Ikuti -->
      <div class="px-8 py-6">
        <button class=" w-full py-2 font-semibold text-white rounded-3xl bg-blue-500 hover:bg-blue-400">
          Ikuti
        </button>
      </div>

      <div class="block lg:hidden py-2 text-tweetgray-400 dark:text-gray-200 flex items-center justify-center gap-5">
        <SVGIcon icon="facebook" size="w-5 h-5" />
        <SVGIcon icon="twitter" size="w-5 h-5" />
        <SVGIcon icon="instagram" size="w-5 h-5" />
      </div>

      <!-- User -->
      <div class="px-8 py-5 lg:py-0 flex items-center justify-center lg:justify-start gap-3 cursor-default">
        <img src="@/assets/images/luffy.jpg" class="w-12 h-12 object-cover rounded-full " alt="">
        <div class="">
          <h3 class="text-sm font-semibold">Huda Damar</h3>
          <p class="text-xs text-gray-500">@hudadamar21</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import SVGIcon from '@/components/SVGIcon.vue';
import { showMenu, setShowMenu } from "@/utils/setShowMenu";

export default {
  components: { SVGIcon },
  setup(){
    const menus = ref([
      {
        icon: 'home',
        name: 'Home'
      },
      {
        icon: 'category',
        name: 'Kategori'
      },
      {
        icon: 'pc',
        name: 'Teknologi'
      },
      {
        icon: 'game',
        name: 'Game'
      },
      {
        icon: 'android',
        name: 'Smartphone'
      },
      {
        icon: 'trending',
        name: 'Trending'
      },
      {
        icon: 'anime',
        name: 'Anime'
      },
    ])

    const activeMenu = ref('Home')

    const sidebar_overlay = ref('')
    const sidebar = ref('')

    watch(showMenu, (newval) => {
      console.log('newval', newval)

      const soc = sidebar_overlay.value.classList
      const sc = sidebar.value.classList

      if(newval === true) {
        soc.remove('hidden')
        soc.add('block')
        setTimeout(() => {
          sc.remove('-translate-x-full')
          soc.remove('bg-opacity-0')
          soc.add('bg-opacity-80')
        }, 10);
      } else {
        sc.add('-translate-x-full')
        soc.remove('bg-opacity-80')
        soc.add('bg-opacity-0')
        setTimeout(() => {
          soc.remove('block')
          soc.add('hidden')
        }, 300);
      }
    })

    return {
      menus,
      activeMenu,
      showMenu,
      setShowMenu,
      sidebar_overlay,
      sidebar,
    }
  }

}
</script>

<style>

</style>