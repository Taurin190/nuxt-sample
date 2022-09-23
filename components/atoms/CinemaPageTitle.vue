<template>
  <v-row class="center pt-5">
    <h1 class="grey--text text--darken-2">{{ title }}</h1>
    <p class="grey--text text--darken-1 font-weight-bold mt-auto mb-1 ml-5">
      {{ sub_title }}
    </p>
  </v-row>
</template>
<style scoped>
a.cinema-link:hover {
  color: #4da7d8;
}
</style>
<script>
export default {
  name: "CinemaPageTitle",
  props: {
    title: {
      type: String,
      default: "Sampleシネマズ 上映中の作品",
    },
    sub_title: {
      type: String,
      default: "NOW SHOWING",
    },
  },
};
</script>
