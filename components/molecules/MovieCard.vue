<template>
  <nuxt-link :to="to" class="center block text-decoration-none">
    <v-img class="mb-1" :src="image_path" />
    <span>{{ title }}</span>
  </nuxt-link>
</template>
<style scoped>
a {
  color: black;
}
a:hover {
  color: #4da7d8;
}
div.v-image:hover {
  opacity: 0.8;
  color: white;
}
</style>
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