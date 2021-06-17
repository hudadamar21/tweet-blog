<template>
  <div class="relative mt-8 rounded-3xl border-2 dark:border-tweetgray-100 overflow-hidden">
    <div class="bg-blue-400 h-20 w-full "></div>
    <div class="bg-gray-100 dark:bg-tweetgray-500">
      <div class="absolute top-14 left-0 px-5 flex items-end justify-between w-full">
        <div class="flex items-end gap-3">
          <img src="@/assets/images/luffy.jpg" class="w-16 h-16 object-cover rounded-full border-4 border-white bg-gray-300" alt="">
          <div class="text-sm">
            <h3 class="font-semibold">Huda Damar</h3>
            <p class="text-gray-500">@hudadamar21</p>
          </div>
        </div>
        <button class="flex items-center gap-2 px-4 py-1.5 text-white text-sm rounded-3xl bg-blue-500 hover:bg-blue-400">
          <SVGIcon icon="twitter" size="w-3 h-3" />
          <p>Ikuti</p>
        </button>
      </div>
      <ul class="flex gap-3 pt-20 px-5 pb-3 gap-6">
        <li v-for="stat of stats" :key="stat.name">
          <h2 class="font-semibold">{{ stat.name }}</h2>
          <p class="text-sm text-gray-500">{{ stat.value }}</p>
        </li>
      </ul>
    </div>

    <div class="px-5 bg-white dark:bg-tweetgray-400 pt-5">
      <div class="flex items-center gap-3">
        <img src="@/assets/images/luffy.jpg" class="w-10 h-10 object-cover rounded-full bg-gray-300" alt="">
        <div class="text-xs">
          <h3 class="font-semibold">Huda Damar</h3>
          <p class="text-gray-500">@hudadamar21</p>
        </div>
      </div>
      <div class="rounded-xl overflow-hidden mt-3 aspect-w-16 aspect-h-9">
        <img src="@/assets/images/sakura_saber.jpg" class="object-cover object-center" alt="">
      </div>
      <ul class="flex items-start gap-8 text-xs py-5 px-4 text-gray-500 dark:text-gray-400">
        <li 
          v-for="option of options" 
          :key="option.icon"
          class="flex items-center gap-2"
        >
          <SVGIcon :icon="option.icon" :size="option.size"/>
          <span v-if="option.icon !== 'share_2'">{{ option.value}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import SVGIcon from '@/components/SVGIcon.vue'

export default {
  components: { SVGIcon },
  setup(){
    const stats = reactive([
      {
        name: 'Tweets',
        value: 27
      },
      {
        name: 'Mengikuti',
        value: 400
      },
      {
        name: 'Pengikut',
        value: 950
      },
    ])

    const options = reactive([
      {
        icon: 'chat',
        size: 'w-4 h-4',
        value: 8
      },
      {
        icon: 'share',
        size: 'w-5 h-5',
        value: 12
      },
      {
        icon: 'love',
        size: 'w-6 h-6',
        value: 40
      },
      {
        icon: 'share_2',
        size: 'w-5 h-5'
      },
    ])

    return {
      stats,
      options
    }
  }
}
</script>

<style>

</style>