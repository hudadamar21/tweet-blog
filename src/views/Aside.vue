<template>
  <div class="w-full lg:w-[30%] py-3 pl-5 pr-5 lg:pr-12">
    <div class="hidden lg:flex items-center py-3 px-6 rounded-3xl bg-gray-200 dark:bg-tweetgray-300 mb-3 transition">
      <SVGIcon icon="search" size="w-5 h-5" color="text-gray-400"/>
      <input type="text" class="ml-2 bg-transparent text-sm" placeholder="Search Postingan">
    </div>
    <div class="bg-gray-100 dark:bg-tweetgray-300 rounded-xl transition">
      <h1 class="font-semibold text-lg p-5 border-b-2 dark:border-tweetgray-100">Postingan Trending</h1>
      <ul class="flex flex-col">
        <li 
          v-for="(post, i) of trendingPosts" 
          :key="i"
          class="border-b-2 dark:border-tweetgray-100 text-sm p-6"
        >
          <h2 class="font-semibold line-clamp-2 mb-2 tracking-wide hover:underline cursor-pointer">{{ post.title }}</h2>
          <p class="text-xs text-gray-500 dark:text-gray-400 line-clamp-3">{{ post.content }}</p>
        </li>
        <li class="p-6">
          <a href="#" class="text-blue-400 font-semibold text-sm hover:underline">
            Lihat Selengkapnya
          </a>
        </li>
      </ul>
    </div>
    <div class="sticky top-2 pb-5">
      <TwitterProfileCard />
      <div class="my-10 px-6 text-gray-600 text-sm">
        <div class="flex justify-center lg:justify-start flex-wrap">
          <a href="#" class="mr-3 hover:underline dark:text-gray-300">About Us</a>
          <a href="#" class="mr-3 hover:underline dark:text-gray-300">Disclaimer</a>
          <a href="#" class="mr-3 hover:underline dark:text-gray-300">Partner</a>
          <a href="#" class="mr-3 hover:underline dark:text-gray-300">Contact Us</a>
          <a href="#" class="mr-3 hover:underline dark:text-gray-300">Sitemap</a>
        </div>
        <p class="dark:text-gray-300 mt-3 text-center lg:text-left">&copy; 2021 TweetBlog</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import TwitterProfileCard from "@/components/TwitterProfileCard.vue";
import SVGIcon from "@/components/SVGIcon.vue";

export default {
  components: {
    TwitterProfileCard,
    SVGIcon
  },
  setup(){
    const trendingPosts = reactive([
      {
        title: 'Article Lorem Ispun Dono Anime Dolor Sale',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada mauris adipiscing sapien, vestibulum fermentum. Id dolor placerat tristique massa'
      },
      {
        title: 'Article Anime Dolor Salen Japan Monoserat Ismit Ggamiing',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscinum. Id dolor, placerat tristique massa'
      },
      {
        title: 'Article Lorem Ispun Dono Anime Dolor Salen Japan Monoserat Ismit Ggamiing',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada mauris adipiscing sapien, vestibulum fermentum. Id dolor, placerat tristique massa'
      },
      {
        title: 'Article Lorem Ispun Dono Anime Dolor Salen Japan Monoserat Ismit Ggamiing',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada mauris adipiscing sapien, vestibulum fermentum. Id dolor, placerat tristique massa'
      },
    ])

    return {
      trendingPosts
    }
  }
}
</script>

<style>

</style>