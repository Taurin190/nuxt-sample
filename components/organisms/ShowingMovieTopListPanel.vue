<template>
  <card-tile>
    <v-row>
      <v-col cols="12">
        <panel-title
          :to="panel_title.to"
          :icon="panel_title.icon"
          :title="panel_title.title"
          :etitle="panel_title.etitle"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="movie in movies" :key="movie.index" cols="4">
        <movie-card
          :to="movie.link"
          :image_path="movie.image_path"
          :title="movie.title"
        />
      </v-col>
    </v-row>
  </card-tile>
</template>
<script>
import PanelTitle from "../molecules/PanelTitle.vue";
import MovieCard from "../molecules/MovieCard.vue";
import { defineComponent, useContext, useAsync } from "@nuxtjs/composition-api";
import CardTile from "../atoms/CardTile.vue";

export default defineComponent({
  components: { PanelTitle, MovieCard, CardTile },
  name: "ShowingMovieTopListPanel",
  setup() {
    const panel_title = {
      to: "/showing",
      icon: "mdi-movie-open",
      title: "上映中の作品",
      etitle: "NOW SHOWING",
    };
    const { app } = useContext();
    const movies = useAsync(async () => {
      const response = await app.$repositories("movie").getShowing();
      console.log(response);
      return response.data;
    });

    return { movies, panel_title };
  },
});
</script>