<template>
  <cinema-link :to="to">
    <v-row justify="start" dense>
      <v-col cols="4">
        <hover-image class="mb-1" :src="image_path" />
      </v-col>
      <v-col cols="8">
        <v-row no-gutters>
          <v-col cols="8" class="pr-0 mr-0">
            <h2>{{ title }}</h2>
          </v-col>
          <v-col class="list-link pl-0 ml-auto text-right">
            <list-page-link class="link" :to="to" />
          </v-col>
        </v-row>
        <v-row no-gutters class="mt-3">
          <v-col cols="12">
            <span class="movie-credit mt-1">監督：{{ director }}</span>
          </v-col>
          <v-col cols="12">
            <span class="movie-credit mt-1">出演：{{ performers }}</span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </cinema-link>
</template>
<style scoped>
h2 {
  font-size: 1.0em;
}
a.link {
  width: 30px;
}
span.movie-credit {
  font-size: 0.7em;
}
</style>
<script>
import CinemaLink from "../atoms/CinemaLink.vue";
import HoverImage from "../atoms/HoverImage.vue";
import ListPageLink from "./ListPageLink.vue";
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  components: { CinemaLink, HoverImage, ListPageLink },
  name: "MovieCreditTitleCard",
  props: {
    to: {
      type: String,
      default: "",
    },
    image_path: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    director: {
      type: String,
      default: "",
    },
    performers: {
      type: String,
      default: "",
    },
  },
});
</script>