<template>
  <div class="movie-list-panel py-5 mb-5 px-4 rounded">
    <v-row justify="left" align="center">
      <v-col cols="12">
        <panel-title
          :to="panel_title.to"
          :icon="panel_title.icon"
          :title="panel_title.title"
          :etitle="panel_title.etitle"
        />
      </v-col>
    </v-row>
    <v-row justify="left" align="center">
      <v-col v-for="movie in movies" :key="movie.index" cols="4">
        <movie-card
          :to="movie.link"
          :image_path="movie.image_path"
          :title="movie.title"
        />
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
div.movie-list-panel {
  background-color: white;
}
</style>
<script>
import PanelTitle from "../molecules/PanelTitle.vue";
import MovieCard from "../molecules/MovieCard.vue";
import { useContext, useAsync } from '@nuxtjs/composition-api'


export default {
  components: { PanelTitle, MovieCard },
  name: "ShowingMovieTopListPanel",
  props: {
    to: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    etitle: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      panel_title: {
        to: "/showing",
        icon: "mdi-movie-open",
        title: "上映中の作品",
        etitle: "NOW SHOWING",
      },
    };
  },
  setup() {
    const { app } = useContext()
    const movies = useAsync(async () => {
      const response = await app.$repositories('movie').getShowing()
      console.log(response);
      return response.data
    })

    return { movies };
  }
};
</script>