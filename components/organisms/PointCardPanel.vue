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
        <point-card-link />
        <login-page-link />
      </v-col>
    </v-row>
  </card-tile>
</template>
<style scoped>
div.point-card-panel {
  background-color: white;
}
</style>
<script>
import CardTile from "../atoms/CardTile.vue";
import LoginPageLink from "../molecules/LoginPageLink.vue";
import PanelTitle from "../molecules/PanelTitle.vue";
import PointCardLink from "../molecules/PointCardLink.vue";
export default {
  components: { PanelTitle, PointCardLink, LoginPageLink, CardTile },
  name: "PointCardPanel",
  data() {
    return {
      panel_title: {
        to: "/pointcard",
        icon: "mdi-theater",
        title: "ポイントカード",
        etitle: "POINT CARD",
      },
    };
  },
};
</script>