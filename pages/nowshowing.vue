<template>
  <div>
    <tab-menu :active="2" />
    <cinema-page-title
      tilte="Sampleシネマズ 上映中の作品"
      sub_title="NOW SHOWING"
    />
    <v-row>
      <v-col cols="12">
        <showing-movie-list-panel />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CinemaPageTitle from "~/components/atoms/CinemaPageTitle.vue";
import ShowingMovieListPanel from "~/components/organisms/ShowingMovieListPanel.vue";
import TabMenu from "~/components/organisms/TabMenu.vue";
export default {
  components: { TabMenu, ShowingMovieListPanel, CinemaPageTitle },
  name: "NowShowingPage",
};
</script>
