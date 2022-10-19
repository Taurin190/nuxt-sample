<template>
  <v-row>
    <v-col cols="12">
      <cinema-page-title
        :title="movie.title"
        :sub_title="movie.sub_title"
      />
    </v-col>
    <v-col cols="8">
        <v-img :src="movie.image_path" />
    </v-col>
    <v-col cols="4"></v-col>
  </v-row>
</template>

<script>
import CinemaPageTitle from "~/components/atoms/CinemaPageTitle.vue";
import { defineComponent, useContext, useAsync } from "@nuxtjs/composition-api";

export default defineComponent({
  components: { CinemaPageTitle },
  name: "MovieDetailPanel",
  props: {
    id: {
      type: String,
    },
  },
  setup(props) {
    const { app } = useContext();
    const movie = useAsync(async () => {
      const response = await app.$repositories("movie").getMovieDetail(props.id);
      console.log(response);
      return response.data;
    });

    return { movie };
  },
});
</script>