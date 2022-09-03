<template>
  <div class="theater-panel py-5 px-4 mb-5 rounded" v-bind:class="theme_color_class">
    <v-row justify="left" align="center">
      <v-col cols="12">
        <panel-title
          :to="panel_title.to"
          :icon="panel_title.icon"
          :title="panel_title.title"
          :etitle="panel_title.etitle"
          :light_mode="true"
          :list_link="false"
        />
      </v-col>
    </v-row>
    <v-row justify="left" align="center">
      <theater-list :theaters="theaters" :theme_color_class="theme_color_class" />
    </v-row>
  </div>
</template>
<style scoped>
div.theater-panel {
  background-color: #4da7d8;
  color: white;
  font-weight: 500;
}
div.theater-panel.light_blue {
  background-color: #4da7d8;
  color: white;
}
div.theater-panel.dark_yellow {
  background-color: #ffa000;
  color: white;
}
div.theater-panel.brown {
  background-color: brown;
  color: white;
}

</style>
<script>
import PanelTitle from "../molecules/PanelTitle.vue";
import TheaterList from "../molecules/TheaterList.vue";
import { useContext, useAsync } from "@nuxtjs/composition-api";

export default {
  components: { PanelTitle, TheaterList },
  data() {
    return {
      panel_title: {
        to: "/thater",
        icon: "mdi-theater",
        title: "Sampleシネマズ",
        etitle: "THEATER",
      },
    };
  },
  props: {
    theme_color_class: {
      type: String,
      default: "light_blue",
    },
  },
  setup() {
    const { app } = useContext();
    const theaters = useAsync(async () => {
      const response = await app.$repositories("theater").get();
      console.log(response);
      var theater_obj = {};
      response.data.forEach((theater, index) => {
        if (theater_obj[theater.area] == undefined) {
          theater_obj[theater.area] = {};
          theater_obj[theater.area]["list"] = [];
        }

          theater_obj[theater.area]['list'].push({
              name: theater.name,
              ename: theater.name,
              to: theater.link,
          });
      });
      return theater_obj;
    });

    return { theaters };
  },
};
</script>