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
        <showing-movie-top-list-panel />
        <comming-soon-movie-top-list-panel />
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
import TabMenu from "~/components/organisms/TabMenu.vue";
import Carousel from "~/components/organisms/Carousel.vue";
import CampaignListPanel from '~/components/organisms/CampaignListPanel.vue';
import CommingSoonMovieTopListPanel from '~/components/organisms/CommingSoonMovieTopListPanel.vue';
import PointCardPanel from '~/components/organisms/PointCardPanel.vue';
import ShowingMovieTopListPanel from '~/components/organisms/ShowingMovieTopListPanel.vue';
import TheaterPanel from '~/components/organisms/TheaterPanel.vue';
import ImageBanners from '~/components/organisms/ImageBanners.vue';
export default {
  components: { TabMenu, Carousel, TheaterPanel, CampaignListPanel, PointCardPanel, CommingSoonMovieTopListPanel, ShowingMovieTopListPanel, ImageBanners },
  name: "IndexPage",
};
</script>
