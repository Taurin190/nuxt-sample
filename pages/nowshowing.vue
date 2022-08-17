<template>
  <div>
    <tab-menu :active="2" />
    <v-row>
      <h1>Sampleシネマズ 上映中の作品</h1>
      <p>NOW SHOWING</p>
    </v-row>
    <v-row>
      <v-col cols="12">
        <showing-movie-list-panel />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ShowingMovieListPanel from "~/components/organisms/ShowingMovieListPanel.vue";
import TabMenu from "~/components/organisms/TabMenu.vue";
export default {
  components: { TabMenu, ShowingMovieListPanel },
  name: "NowShowingPage",
};
</script>
