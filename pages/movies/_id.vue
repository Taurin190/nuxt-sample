<template>
  <div>
    <tab-menu :active="3" />
    <cinema-page-title :title="movie.title" :sub_title="movie.sub_title" />
    <v-row>
      <v-col cols="8">
        <v-img :src="movie.image_path" class="mb-4" />
        <movie-introduction-panel class="mb-4" />
        <movie-credit-panel />
      </v-col>
      <v-col cols="4">
        <road-show-card />
        <theater-panel theme_color_class="dark_yellow" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CinemaPageTitle from "~/components/atoms/CinemaPageTitle.vue";
import TabMenu from "~/components/organisms/TabMenu.vue";
import {
  defineComponent,
  useRoute,
  useContext,
  useAsync,
} from "@nuxtjs/composition-api";
import TheaterPanel from "~/components/organisms/TheaterPanel.vue";
import RoadShowCard from "~/components/molecules/RoadShowCard.vue";
import MovieCreditPanel from "~/components/organisms/MovieCreditPanel.vue";
import MovieIntroductionPanel from "~/components/organisms/MovieIntroductionPanel.vue";

export default defineComponent({
  components: { TabMenu, CinemaPageTitle, TheaterPanel, RoadShowCard, MovieCreditPanel, MovieIntroductionPanel },
  name: "ComingSoonPage",
  setup() {
    const route = useRoute();
    const id = route.value.params.id;

    const { app } = useContext();
    const movie = useAsync(async () => {
      const response = await app.$repositories("movie").getMovieDetail(id);
      console.log(response);
      return response.data;
    });

    return { movie };
  },
});
</script>