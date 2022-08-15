<template>
  <cinema-link :to="to">
    <v-row justify="start" align="left" dense>
      <v-col cols="4">
        <hover-image class="mb-1" :src="image_path" />
      </v-col>
      <v-col cols="8" align="left">
        <v-row no-gutters>
          <v-col cols="9" class="pr-0 mr-0">
            <h2>{{ title }}</h2>
          </v-col>
          <v-col class="list-link pl-0 ml-auto text-right">
            <list-page-link class="link" :to="to" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </cinema-link>
</template>
<style scoped>
h2 {
  font-size: 1.1em;
}
a.link {
  width: 30px;
}
</style>
<script>
import CinemaLink from "../atoms/CinemaLink.vue";
import HoverImage from "../atoms/HoverImage.vue";
import ListPageLink from "./ListPageLink.vue";
export default {
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
  },
};
</script>