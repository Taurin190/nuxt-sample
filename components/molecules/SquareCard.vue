<template>
  <card-tile>
    <cinema-link :to="to" class="center block">
      <v-row>
        <v-col cols="8">
          <h3>{{ title }}</h3>
        </v-col>
        <v-col cols="4" class="text-right">
          <list-page-link :to="to" />
        </v-col>
      </v-row>
      <hover-image class="mb-1" :src="image_path" />
      {{ description }}
    </cinema-link>
  </card-tile>
</template>
<script>
import CardTile from "../atoms/CardTile.vue";
import CinemaLink from "../atoms/CinemaLink.vue";
import HoverImage from "../atoms/HoverImage.vue";
import ListPageLink from "./ListPageLink.vue";
export default {
  components: { CinemaLink, HoverImage, ListPageLink, CardTile },
  name: "SquareCard",
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
    description: {
      type: String,
      default: "",
    },
  },
};
</script>
