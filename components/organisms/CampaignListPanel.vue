<template>
  <div class="campaign-list-panel py-5 mb-5 px-4 rounded">
    <v-row justify="left" align="center">
      <v-col cols="12">
        <panel-title :to="panel_title.to" :icon="panel_title.icon" :title="panel_title.title" :etitle="panel_title.etitle" />
      </v-col>
    </v-row>
    <v-row justify="left" align="center"> </v-row>
  </div>
</template>
<style scoped>
div.campaign-list-panel {
    background-color: white;
}
</style>
<script>
import PanelTitle from "../molecules/PanelTitle.vue";
export default {
  components: { PanelTitle },
  name: "CampaignListPanel",
  data() {
    return {
      panel_title: {
        to: "/events",
        icon: "mdi-calendar-check",
        title: "キャンペーン",
        etitle: "CAMPAIGNS",
      },
    };
  },
};
</script>