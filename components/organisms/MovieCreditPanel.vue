<template>
  <card-tile>
    <v-row>
      <v-col cols="12">
        <panel-title
          :to="panel_title.to"
          :icon="panel_title.icon"
          :title="panel_title.title"
          :etitle="panel_title.etitle"
          :list_link="false"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <p v-html="movie_data"></p>
      </v-col>
    </v-row>
  </card-tile>
</template>
<script>
import PanelTitle from "../molecules/PanelTitle.vue";
import { defineComponent } from "@nuxtjs/composition-api";
import CardTile from "../atoms/CardTile.vue";

export default defineComponent({
  components: { PanelTitle, CardTile },
  name: "MovieCreditPanel",
  setup() {
    const panel_title = {
      to: "/",
      icon: "mdi-movie-open",
      title: "作品データ",
      etitle: "DATA",
    };

    const movie_data =
      "監督： アンソニー・ソロー、ショー・ルッソ<br>出演： クリス・エミリー 、ロバート･ブラウン. 、スカーレット・ハンセン";

    return { panel_title, movie_data };
  },
});
</script>