<template>
  <section class="py-5 px-8">
    <ArticleCard 
      class="mb-8"
      v-for="(article, i) of articles" 
      :key="i"
      :title="article.title"
      :image="article.image"
      :author="article.author"
      :date="article.date"
      :content="article.content"
    />
    <Pagination/>
  </section>
</template>

<script>
import { reactive } from '@vue/reactivity';

import ArticleCard from "@/components/ArticleCard.vue";
import Pagination from '@/components/Pagination.vue';

import img1 from "@/assets/images/img-1.png";
import sakura_saber from "@/assets/images/sakura_saber.jpg";

export default {
  components: {
    ArticleCard,
    Pagination
  },
  setup(){
    const articles = reactive([
      {
        title: 'Article Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,voluptatum?',
        image: img1,
        author: 'Andre Rio',
        date: 'Mei 24 11:23',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident exercitationem nisi quibusdam nemo officia. Esse consequatur porro velit nihil dolore cumque. Labore animi molestias possimus, nemo unde exercitationem beatae alias?'
      },
      {
        title: 'Article Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,voluptatum?',
        image: sakura_saber,
        author: 'Huda Damar',
        date: 'Jan 24 11:23',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident exercitationem nisi quibusdam nemo officia. Esse consequatur porro velit nihil dolore cumque. Labore animi molestias possimus, nemo unde exercitationem beatae alias?'
      },
      {
        title: 'Article Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,voluptatum?',
        image: img1,
        author: 'Andre Rio',
        date: 'Mei 24 11:23',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident exercitationem nisi quibusdam nemo officia. Esse consequatur porro velit nihil dolore cumque. Labore animi molestias possimus, nemo unde exercitationem beatae alias?'
      },
      {
        title: 'Article Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,voluptatum?',
        image: sakura_saber,
        author: 'Huda Damar',
        date: 'Jan 24 11:23',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident exercitationem nisi quibusdam nemo officia. Esse consequatur porro velit nihil dolore cumque. Labore animi molestias possimus, nemo unde exercitationem beatae alias?'
      },
    ])

    return {
      articles
    }
  }
}
</script>

<style>

</style>