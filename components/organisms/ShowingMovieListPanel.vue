<template>
  <div>
    <article v-for="movie in movies" :key="movie.index">
        <movie-credit-title-list-item
        :to="movie.to"
        :image_path="movie.image_path"
        :title="movie.title"
        director="aaaa"
        performeers="aaaaaa"
         />
    </article>
  </div>
</template>
<script>
import MovieCreditTitleListItem from '../molecules/MovieCreditTitleListItem.vue';
import { useContext, useAsync } from '@nuxtjs/composition-api'

export default {
  components: { MovieCreditTitleListItem },
  name: "ShowingMovieListPanel",
  setup() {
    const { app } = useContext();
    const movies = useAsync(async () => {
      const response = await app.$repositories("movie").getShowing();
      console.log(response);
      return response.data;
    });

    return { movies };
  },
};
</script>