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
import { defineComponent, useRoute } from '@nuxtjs/composition-api'
export default defineComponent({
  components: { TabMenu, CinemaPageTitle, CommingSoonMovieListPanel, MovieDetailPanel },
  name: "ComingSoonPage",
  setup() {
      const route = useRoute();
      const id = route.value.params.id;
      
      return {
          id,
      }
  }
});
</script>