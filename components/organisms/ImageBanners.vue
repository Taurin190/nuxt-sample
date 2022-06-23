<template>
  <v-row align="center">
      <image-banner />
      <image-banner />
      <image-banner />
  </v-row>
</template>

<script>
import ImageBanner from '~/components/molecules/ImageBanner.vue';
export default {
  components: { ImageBanner },
  name: "ImageBanners",
};
</script>