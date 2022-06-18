<template>
  <div class="movie-list-panel py-5 mb-5 px-4 rounded">
    <v-row justify="left" align="center">
      <v-col cols="12">
        <panel-title :to="panel_title.to" :icon="panel_title.icon" :title="panel_title.title" :etitle="panel_title.etitle" />
      </v-col>
    </v-row>
    <v-row justify="left" align="center">
      <v-col v-for="movie in movies" :key="movie.index" cols="4">
        <movie-card
          :to="movie.to"
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
export default {
  components: { PanelTitle, MovieCard },
  name: "CommingSoonMovieListPanel",
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
        to: "/comingsoon",
        icon: "mdi-video-vintage",
        title: "公開予定作品",
        etitle: "COMING SOON",
      },
      movies: [
        {
          index: 1,
          to: "/movies/1",
          image_path: "/movie_tokusatsu_kaiju.png",
          title: "特撮映画１",
        },
        {
          index: 2,
          to: "/movies/2",
          image_path: "/movie_tokusatsu_kaiju.png",
          title: "太郎と次郎",
        },
        {
          index: 3,
          to: "/movies/3",
          image_path: "/movie_tokusatsu_kaiju.png",
          title: "バケモノの親",
        },
        {
          index: 4,
          to: "/movies/4",
          image_path: "/movie_tokusatsu_kaiju.png",
          title: "ドラさえもん - 最後の道具",
        },
        {
          index: 5,
          to: "/movies/5",
          image_path: "/movie_tokusatsu_kaiju.png",
          title: "極道の嫁 ザ・シネマ",
        },
        {
          index: 6,
          to: "/movies/6",
          image_path: "/movie_tokusatsu_kaiju.png",
          title: "カスタムロボ",
        },
      ],
    };
  },
};
</script>