<template>
  <v-row align="center">
      <image-banner v-for="banner in banners"
      :key="banner"
      :to="banner.link"
      :image_path="banner.image_path"/>
  </v-row>
</template>

<script>
import { useContext, useAsync } from '@nuxtjs/composition-api'
import ImageBanner from '~/components/molecules/ImageBanner.vue';
export default {
  components: { ImageBanner },
  name: "ImageBanners",
  setup() {
    const { app } = useContext();
    const banners = useAsync(async () => {
      const response = await app.$repositories("banner").get();
      console.log(response);
      return response.data;
    });

    return { banners };
  },
};
</script>