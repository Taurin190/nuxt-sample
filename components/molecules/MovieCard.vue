<template>
  <cinema-link :to="to" class="center block">
    <hover-image class="mb-1" :src="image_path" />
    <span>{{ title }}</span>
  </cinema-link>
</template>
<script>
import CinemaLink from "../atoms/CinemaLink.vue";
import HoverImage from "../atoms/HoverImage.vue";
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  components: { CinemaLink, HoverImage },
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
});
</script>