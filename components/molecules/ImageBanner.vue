<template>
  <v-col cols="4">
    <cinema-link :to="to">
      <hover-image :src="image_path" />
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
import HoverImage from '../atoms/HoverImage.vue';
export default {
  components: { CinemaLink, HoverImage },
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