<template>
  <div class="w-full overflow-hidden" data-aos="fade-up">
    <div class="aspect-w-16 aspect-h-9">
      <img :src="image" class="rounded-t-3xl w-full h-full object-cover object-center" alt="">
    </div>
    <div class="border-2 border-t-0 dark:border-tweetgray-100 rounded-b-3xl p-6 pt-3 flex flex-col gap-3">
      <router-link to="/article" class="font-medium text-xl line-clamp-1 hover:underline">{{ title }}</router-link>
      <h3 class="font-medium text-sm">By {{ author }} - {{ date }}</h3>
      <p class="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
    author: String,
    date: String,
    content: String
  }
}
</script>

<style>
  .line-champ {
    line-break: 1;
  }
</style>