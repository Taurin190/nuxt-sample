<template>
  <div>
    <tab-menu :active="3" />
    <cinema-page-title
      title="Sampleシネマズ 公開予定作品"
      sub_title="COMING SOON"
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
import TabMenu from '~/components/organisms/TabMenu.vue';
export default {
  components: { TabMenu, ShowingMovieListPanel, CinemaPageTitle },
  name: "ComingSoonPage",
};
</script>
