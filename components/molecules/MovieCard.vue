<template>
  <cinema-link :to="to" class="center block">
    <v-img class="mb-1" :src="image_path" />
    <span>{{ title }}</span>
  </cinema-link>
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
import CinemaLink from "../atoms/CinemaLink.vue";
export default {
  components: { CinemaLink },
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