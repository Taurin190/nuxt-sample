<template>
  <div>
    <tab-menu :active="3" />
    <cinema-page-title
      title="Sampleシネマズ 公開予定作品"
      sub_title="COMING SOON"
    />
    <v-row>
      <comming-soon-movie-list-panel />
    </v-row>
  </div>
</template>

<script>
import CinemaPageTitle from "~/components/atoms/CinemaPageTitle.vue";
import CommingSoonMovieListPanel from "~/components/organisms/CommingSoonMovieListPanel.vue";
import TabMenu from "~/components/organisms/TabMenu.vue";
export default {
  components: { TabMenu, CinemaPageTitle, CommingSoonMovieListPanel },
  name: "ComingSoonPage",
};
</script>
