<template>
  <div class="flex lg:hidden items-center justify-center h-10 w-full text-gray-600 dark:text-gray-300 px-3">
    <div class="pagination rounded-l-md  text-gray-500 dark:text-gray-400 border border-r-0">
      <SVGIcon icon="double-arrow" size="w-2 h-2" />  
      <SVGIcon icon="double-arrow" size="w-2 h-2" />  
    </div>
    <div class="pagination text-gray-500 dark:text-gray-400 border border-r-0">
      <SVGIcon icon="double-arrow" size="w-2 h-2" />  
    </div>
    <div class="pagination active">
      1  
    </div>
    <div class="pagination font-semibold border border-r-0 border-l-0">
      2
    </div>
    <div class="pagination font-semibold border border-r-0">
      3  
    </div>
    <div class="pagination font-semibold border border-r-0">
      ...  
    </div>
    <div class="pagination font-semibold border">
      20
    </div>
    <div class="pagination text-gray-500 dark:text-gray-400 border border-l-0">
      <SVGIcon icon="double-arrow" size="w-2 h-2" class="transform rotate-180" />  
    </div>
    <div class="pagination rounded-r-md text-gray-500 dark:text-gray-400 border border-l-0">
      <SVGIcon icon="double-arrow" size="w-2 h-2" class="transform rotate-180" />  
      <SVGIcon icon="double-arrow" size="w-2 h-2" class="transform rotate-180" />  
    </div>
  </div>
</template>

<script>
import SVGIcon from '@/components/SVGIcon.vue';
export default {
  components: {
    SVGIcon
  }
}
</script>

<style lang="postcss" scoped>
  .pagination {
    @apply flex items-center hover:bg-blue-300 hover:text-white cursor-pointer hover:border-transparent h-full flex-grow justify-center border-gray-300 dark:border-tweetgray-100
  }
  .active {
    @apply bg-blue-400 text-white
  }
</style>