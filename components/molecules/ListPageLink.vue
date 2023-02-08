<template>
  <cinema-link :to="to">
    <span>一覧へ</span>
    <v-icon>mdi-chevron-right-box</v-icon>
  </cinema-link>
</template>
<script>
import CinemaLink from "../atoms/CinemaLink.vue";
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  components: { CinemaLink },
  name: "ListPageLink",
  props: {
    to: {
      type: String,
      default: "/",
    },
  },
});
</script>