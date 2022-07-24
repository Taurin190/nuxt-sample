<template>
  <v-col cols="4">
    <cinema-link :to="to">
    <!-- <nuxt-link :to="to" > -->
      <v-img :src="image_path" />
    <!-- </nuxt-link> -->
    </cinema-link>
  </v-col>
</template>
<style scoped>
img {
  width: 100%;
  height: auto;
}
</style>
<script>
import CinemaLink from '../atoms/CinemaLink.vue';
export default {
  components: { CinemaLink },
  name: "ImageBanner",
  props: {

      to: {
      type: String,
      default: "/",
    },
    image_path: {
      type: String,
      default: "/building_cinema_shitsunai.png",
    },
  },
};
</script>