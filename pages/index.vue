<template>
  <div>
    <TabMenu :active="1" />
    <v-row justify="center" align="center">
      <v-col cols="12">
        <carousel />
      </v-col>
    </v-row>
    <ImageBanners />
    <v-row>
      <v-col cols="4">
        <theater-panel />
      </v-col>
      <v-col cols="8">
        <div
        v-for="panel in panels"
        :key="panel.title"
      >
        <movie-list-panel
          :to="panel.to"
          :icon="panel.icon"
          :title="panel.title"
          :etitle="panel.etitle"
        />
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <campain-list-panel />
      </v-col>
      <v-col cols="4">
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Carousel from "~/components/Carousel.vue";
import CampainListPanel from '~/components/organisms/CampainListPanel.vue';
import MovieListPanel from "~/components/organisms/MovieListPanel.vue";
import TheaterPanel from '~/components/organisms/TheaterPanel.vue';
export default {
  components: { Carousel, MovieListPanel, TheaterPanel, CampainListPanel },
  name: "IndexPage",
  data() {
    return {
      panels: [
        {
          to: "/nowshowing",
          icon: "mdi-movie-open",
          title: "上映中の作品",
          etitle: "NOW SHOWING",
        },
        {
          icon: "mdi-video-vintage",
          title: "公開予定作品",
          etitle: "COMING SOON",
          to: "/comingsoon",
        },
      ],
    };
  },
};
</script>
