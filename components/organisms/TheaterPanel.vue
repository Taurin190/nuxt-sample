<template>
  <div>
    <v-row justify="left" align="center">
      <panel-title :to="panel_title.to" :icon="panel_title.icon" :title="panel_title.title" :etitle="panel_title.etitle" />
    </v-row>
  </div>
</template>

<script>
import PanelTitle from "../molecules/PanelTitle.vue";
export default {
  components: { PanelTitle },
  data() {
    return {
        panel_title: {
            to: '/thater',
            icon: 'mdi-theater',
            title: 'Sampleシネマズ',
            etitle: 'THEATER'
        }
    };
  },
};
</script>