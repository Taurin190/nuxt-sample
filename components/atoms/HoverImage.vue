<template>
  <v-img :src="src" />
</template>
<style scoped>
div.v-image:hover {
  opacity: 0.8;
  color: white;
}
</style>
<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "CinemaLink",
  props: {
    src: {
      type: String,
      default: "/movie_tokusatsu_kaiju.png",
    },
  },
});
</script>
