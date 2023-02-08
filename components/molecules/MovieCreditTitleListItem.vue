<template>
  <v-row class="movie-credit-item rounded">
    <v-col cols="8" class="credit-title">
      <movie-credit-title-card
        :to="to"
        :image_path="image_path"
        :title="title"
        :director="director"
        :performers="performers"
      />
    </v-col>
    <v-col cols="4">
      <showing-theater :theaters="theaters" />
    </v-col>
  </v-row>
</template>
<style scoped>
div.movie-credit-item {
  background-color: white;
}
div.credit-title {
  border-right: 2px dotted darkgrey;
}
</style>
<script>
import MovieCreditTitleCard from "./MovieCreditTitleCard.vue";
import ShowingTheater from "./ShowingTheater.vue";
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "MovieCreditTitleListItem",
  components: { MovieCreditTitleCard, ShowingTheater },
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
    director: {
      type: String,
      default: "",
    },
    performers: {
      type: String,
      default: "",
    },
    theaters: {
      type: Array,
      default: () => [
        { name: "富谷", active: true },
        { name: "佐野", active: true },
        { name: "菖蒲", active: true },
        { name: "木場", active: true },
        { name: "二子玉川", active: true },
        { name: "グランベリーパーク", active: true },
        { name: "川崎", active: true },
        { name: "湘南", active: true },
        { name: "ムービル", active: true },
        { name: "名古屋", active: true },
        { name: "四日市", active: true },
        { name: "明和", active: true },
        { name: "大阪エキスポシティ", active: true },
        { name: "箕面", active: true },
        { name: "HAT神戸", active: true },
        { name: "広島", active: true },
        { name: "佐賀", active: true },
      ],
    },
  },
});
</script>