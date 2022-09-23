<template>
  <cinema-link :to="to">
    <v-row dense>
      <v-col cols="6">
        <hover-image :src="image_path" />
      </v-col>
      <v-col cols="6">
        <span>
          {{ description }}
        </span>
      </v-col>
    </v-row>
  </cinema-link>
</template>

<style>
div.v-image:hover {
  opacity: 0.8;
  color: white;
}
</style>
<script>
import CinemaLink from "../atoms/CinemaLink.vue";
import HoverImage from '../atoms/HoverImage.vue';
export default {
  components: { CinemaLink, HoverImage },
  name: "CampaignLink",
  props: {
    to: {
      type: String,
      default: "",
    },
    image_path: {
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