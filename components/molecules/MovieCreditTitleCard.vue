<template>
  <cinema-link :to="to" class="center block">
    <hover-image class="mb-1" :src="image_path" />
    <span>{{ title }}</span>
  </cinema-link>
</template>
<script>
import CinemaLink from "../atoms/CinemaLink.vue";
import HoverImage from "../atoms/HoverImage.vue";
export default {
  components: { CinemaLink, HoverImage },
  name: "MovieCreditTitleCard",
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