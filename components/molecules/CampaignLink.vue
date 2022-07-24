<template>
  <cinema-link :to="to">
    <v-row align="left" dense>
      <v-col cols="6">
        <v-img :src="image_path" />
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
</style>
<script>
import CinemaLink from "../atoms/CinemaLink.vue";
export default {
  components: { CinemaLink },
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