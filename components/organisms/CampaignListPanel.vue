<template>
  <div class="campaign-list-panel py-5 mb-5 px-4 rounded">
    <v-row>
      <v-col cols="12">
        <panel-title
          :to="panel_title.to"
          :icon="panel_title.icon"
          :title="panel_title.title"
          :etitle="panel_title.etitle"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="event in events" :key="event.id" cols="12">
        <campaign-link
          :to="event.link"
          :description="event.description"
          :image_path="event.image_path"
        />
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
div.campaign-list-panel {
  background-color: white;
}
</style>
<script>
import { useContext, useAsync } from "@nuxtjs/composition-api";
import CampaignLink from "../molecules/CampaignLink.vue";
import PanelTitle from "../molecules/PanelTitle.vue";
export default {
  components: { PanelTitle, CampaignLink },
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
  setup() {
    const { app } = useContext()
    const events = useAsync(async () => {
      const response = await app.$repositories('event').get()
      console.log(response);
      return response.data
    })

    return { events };
  }
};
</script>