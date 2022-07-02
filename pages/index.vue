<template>
  <div>
    <tab-menu :active="1" />
    <v-row justify="center" align="center">
      <v-col cols="12">
        <carousel />
      </v-col>
    </v-row>
    <image-banners />
    <v-row>
      <v-col cols="4">
        <theater-panel />
        <point-card-panel />
      </v-col>
      <v-col cols="8">
        <showing-movie-list-panel />
        <comming-soon-movie-list-panel />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <campaign-list-panel />
      </v-col>
      <v-col cols="4">
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { defineComponent, useContext, useAsync } from '@nuxtjs/composition-api'

import TabMenu from "~/components/organisms/TabMenu.vue";
import Carousel from "~/components/organisms/Carousel.vue";
import CampaignListPanel from '~/components/organisms/CampaignListPanel.vue';
import CommingSoonMovieListPanel from '~/components/organisms/CommingSoonMovieListPanel.vue';
import PointCardPanel from '~/components/organisms/PointCardPanel.vue';
import ShowingMovieListPanel from '~/components/organisms/ShowingMovieListPanel.vue';
import TheaterPanel from '~/components/organisms/TheaterPanel.vue';
import ImageBanners from '~/components/organisms/ImageBanners.vue';
export default {
  components: { TabMenu, Carousel, TheaterPanel, CampaignListPanel, PointCardPanel, CommingSoonMovieListPanel, ShowingMovieListPanel, ImageBanners },
  name: "IndexPage",
  setup() {
   const { app } = useContext()
   
   const theaters = useAsync(async () => {
      const response = await app.$repositories('theater').get()
      console.log(response);
      return response.data
    })

    const movies = useAsync(async () => {
      const response = await app.$repositories('movie').getCommingSoon()
      console.log(response);
      return response.data
    })

    return theaters;
  }
};
</script>
