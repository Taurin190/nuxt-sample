<template>
<v-col cols="12" class="pl-0">
  <div v-for="(movie_group, publish_date) in movie_groups" :key="movie_group.index" class="mb-5">
    <h2 class="pb-3 pt-5 orange--text text--darken-4">{{ publish_date }}</h2>
    <article v-for="movie in movie_group" :key="movie.index" class="ml-2 my-3 py-3">
        <movie-credit-title-list-item
        :to="movie.to"
        :image_path="movie.image_path"
        :title="movie.title"
        :director="movie.director"
        :performers="movie.performers"
        :theaters="movie.theaters"
         />
    </article>
  </div>
</v-col>
</template>
<script>
import MovieCreditTitleListItem from '../molecules/MovieCreditTitleListItem.vue';
import { defineComponent, useContext, useAsync } from '@nuxtjs/composition-api'

export default defineComponent({
  components: { MovieCreditTitleListItem },
  name: "CommingSoonMovieListPanel",
  setup() {
    const { app } = useContext();
    const movie_groups = useAsync(async () => {
      const response = await app.$repositories("movie").getCommingSoonWithCredit();
      console.log(response);
      return response.data;
    });

    return { movie_groups };
  },
});
</script>