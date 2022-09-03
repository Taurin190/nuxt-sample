<template>
  <cinema-link :to="to" class="center block">
    <h3>{{ title }}</h3>
    <hover-image class="mb-1" :src="image_path" />
    
  </cinema-link>
</template>
<script>
import CinemaLink from "../atoms/CinemaLink.vue";
import HoverImage from "../atoms/HoverImage.vue";
export default {
  components: { CinemaLink, HoverImage },
  name: "SquareCard",
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
}
</script>
