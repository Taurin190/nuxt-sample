<template>
  <nuxt-link :to="to" class="center block">
    <v-img :src="image_path" />
    <span>{{ title }}</span>
  </nuxt-link>
</template>

<script>
export default {
  name: "MovieCard",
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