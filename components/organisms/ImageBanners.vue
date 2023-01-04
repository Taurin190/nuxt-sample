<template>
  <v-row>
      <image-banner v-for="banner in banners"
      :key="banner.link"
      :to="banner.link"
      :image_path="banner.image_path"/>
  </v-row>
</template>

<script>
import { defineComponent, useContext, useAsync } from '@nuxtjs/composition-api'
import ImageBanner from '~/components/molecules/ImageBanner.vue';
export default defineComponent({
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
});
</script>