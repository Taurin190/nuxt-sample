<template>
  <div class="campaign-list-panel py-5 mb-5 px-4 rounded">
    <v-row justify="left" align="center">
      <v-col cols="12">
        <panel-title
          :to="panel_title.to"
          :icon="panel_title.icon"
          :title="panel_title.title"
          :etitle="panel_title.etitle"
        />
      </v-col>
    </v-row>
    <v-row justify="left" align="center">
      <v-col v-for="campaign in campaign_list" :key="campaign.index" cols="12">
        <campaign-link
          :to="campaign.to"
          :description="campaign.description"
          :image_path="campaign.image_path"
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
      campaign_list: [
        {
          index: 1,
          to: "/events/movie1",
          image_path: "/movie_tokusatsu_kaiju.png",
          description: "『劇場版　太郎と次郎』抽選で豪華賞品が当たる",
        },
        {
          index: 2,
          to: "/events/movie1",
          image_path: "/movie_tokusatsu_kaiju.png",
          description: "『劇場版　太郎と次郎』抽選で豪華賞品が当たる",
        },
        {
          index: 3,
          to: "/events/movie1",
          image_path: "/movie_tokusatsu_kaiju.png",
          description: "『劇場版　太郎と次郎』抽選で豪華賞品が当たる",
        },
        {
          index: 4,
          to: "/events/movie1",
          image_path: "/movie_tokusatsu_kaiju.png",
          description: "『劇場版　太郎と次郎』抽選で豪華賞品が当たる",
        },
        {
          index: 5,
          to: "/events/movie1",
          image_path: "/movie_tokusatsu_kaiju.png",
          description: "『劇場版　太郎と次郎』抽選で豪華賞品が当たる",
        },
      ],
    };
  },
};
</script>