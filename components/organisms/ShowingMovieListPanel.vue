<template>
  <div>
    <article v-for="movie in movies" :key="movie.index" class="my-3 py-3">
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
</template>
<script>
import MovieCreditTitleListItem from '../molecules/MovieCreditTitleListItem.vue';
import { defineComponent, useContext, useAsync } from '@nuxtjs/composition-api'

export default defineComponent({
  components: { MovieCreditTitleListItem },
  name: "ShowingMovieListPanel",
  setup() {
    const { app } = useContext();
    const movies = useAsync(async () => {
      const response = await app.$repositories("movie").getShowingWithCredit();
      console.log(response);
      return response.data;
    });

    return { movies };
  },
});
</script>