<template>
  <cinema-link :to="to">
    <v-row>
      <v-col cols="4">
        <hover-image class="mb-1" :src="image_path" />
      </v-col>
      <v-col cols="8">
        {{ event_description }}
        <span class="event_date grey--text text--darken-2 ">{{ event_date }}</span>
      </v-col>
    </v-row>
  </cinema-link>
</template>
<style scoped>
span.event_date {
    font-size: 0.8em;   
}
</style>
<script>
import { defineComponent } from "@nuxtjs/composition-api";
import CinemaLink from "../atoms/CinemaLink.vue";
import HoverImage from "../atoms/HoverImage.vue";
export default defineComponent({
  components: { CinemaLink, HoverImage },
  name: "EventListItem",
  props: {
    to: {
      type: String,
      default: "/",
    },
    image_path: {
      type: String,
      default: "/building_cinema_shitsunai.png",
    },
    event_description: {
      type: String,
      default: "",
    },
    event_date: {
      type: String,
      default: "[2022/08/19]",
    }
  },
});
</script>