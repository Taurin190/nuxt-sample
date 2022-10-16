<template>
  <div>
    <tab-menu :active="2" />
    <cinema-page-title
      title="Sampleシネマズ 公開予定作品"
      sub_title="COMING SOON"
    />
    <v-row>
      <movie-detail-panel />
    </v-row>
  </div>
</template>

<script>
import CinemaPageTitle from "~/components/atoms/CinemaPageTitle.vue";
import CommingSoonMovieListPanel from "~/components/organisms/CommingSoonMovieListPanel.vue";
import MovieDetailPanel from '~/components/organisms/MovieDetailPanel.vue';
import TabMenu from "~/components/organisms/TabMenu.vue";
import useRoute from 'vue-router';
export default {
  components: { TabMenu, CinemaPageTitle, CommingSoonMovieListPanel, MovieDetailPanel },
  name: "ComingSoonPage",
  setup() {
    //   route = useRoute();
    //   this.id = route.params;
  },
  data() {
    return {
        id: 0
    }
  }
};
</script>