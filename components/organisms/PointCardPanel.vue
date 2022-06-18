<template>
  <div class="point-card-panel py-5 mb-5 px-4 rounded">
    <v-row justify="left" align="center">
      <v-col cols="12">
        <panel-title :to="panel_title.to" :icon="panel_title.icon" :title="panel_title.title" :etitle="panel_title.etitle" />
        <point-card-link />
        <login-page-link />
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
div.point-card-panel {
    background-color: white;
}
</style>
<script>
import LoginPageLink from '../molecules/LoginPageLink.vue';
import PanelTitle from "../molecules/PanelTitle.vue";
import PointCardLink from '../molecules/PointCardLink.vue';
export default {
  components: { PanelTitle, PointCardLink, LoginPageLink },
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