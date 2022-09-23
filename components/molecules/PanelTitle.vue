<template>
  <cinema-link :to="to" class="center" v-bind:class="light_mode ? 'light' : ''">
    <v-row>
      <v-col class="icon">
        <v-icon large v-bind:class="light_mode ? 'lightblue' : ''">{{
          icon
        }}</v-icon>
      </v-col>
      <v-col v-bind:cols="list_link ? 7: 9">
        <v-row no-gutters>
          <v-col cols="12">
            <span class="title" v-bind:class="light_mode ? 'light' : ''">{{
              title
            }}</span>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12">
            <span class="e-title" v-bind:class="light_mode ? 'light' : ''">{{
              etitle
            }}</span>
          </v-col>
        </v-row>
      </v-col>
      <v-col v-if="list_link" class="list-link pl-0 ml-auto text-right">
          <list-page-link :to="to" />
      </v-col>
    </v-row>
  </cinema-link>
</template>
<style scoped>
div.icon {
  max-width: 60px;
}
div > a {
  text-decoration: none;
}
div.list-link {
    min-width: 60px;
}
span.title {
  display: block;
  font-size: 13px;
  color: black;
}
span.title.light {
  color: white;
}
span.e-title {
  display: block;
  font-size: 12px;
  color: gray;
}
span.e-title.light {
  color: lightgray;
}

.light {
  color: white;
}
</style>
<script>
import CinemaLink from "../atoms/CinemaLink.vue";
import ListPageLink from './ListPageLink.vue';

export default {
  components: { CinemaLink, ListPageLink },
  name: "PanelTitle",
  props: {
    to: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    etitle: {
      type: String,
      default: "",
    },
    light_mode: {
      type: Boolean,
      default: false,
    },
    list_link: {
        type: Boolean,
        default: true,
    }
  },
};
</script>