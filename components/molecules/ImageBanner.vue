<template>
  <v-col cols="4">
    <nuxt-link :to="to" >
      <v-img :src="image_path" />
    </nuxt-link>
  </v-col>
</template>
<style scoped>
img {
  width: 100%;
  height: auto;
}
</style>
<script>
export default {
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